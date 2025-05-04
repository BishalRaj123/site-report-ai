// Dashboard.tsx
import React, { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { analyzeVideo } from '@/services/apiService';
import { AnalysisData } from '@/components/AnalysisReport';
import AnalysisReport from '@/components/AnalysisReport';
import { fetchUserProjects } from '@/services/apiService';
import { Link } from 'react-router-dom';
import { toast } from "@/components/ui/use-toast"
import { useToast } from "@/components/ui/use-toast"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Shell } from '@/components/Shell';

const Dashboard = () => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AnalysisData | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [userProjects, setUserProjects] = useState<any[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      const projects = await fetchUserProjects();
      setUserProjects(projects);
    };

    loadProjects();
  }, []);

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setVideoFile(file);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      (fileInputRef.current as HTMLElement).click();
    }
  };

  const handleAnalyze = async () => {
    if (!videoFile) {
      toast({
        title: "No video selected.",
        description: "Please upload a video file to analyze.",
      })
      return;
    }

    setIsAnalyzing(true);
    setUploadProgress(0);

    try {
      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress((prevProgress) => {
          const newProgress = prevProgress + 10;
          if (newProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return newProgress;
        });
      }, 200);

      const result = await analyzeVideo(videoFile);
      setAnalysisResult(result);
    } catch (error: any) {
      toast({
        title: "Analysis failed.",
        description: error.message,
        variant: "destructive",
      })
      console.error("Video analysis failed:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <Shell>
      <div className="md:container md:mx-auto py-6">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

        {/* Video Analysis Section */}
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Video Analysis</CardTitle>
              <CardDescription>Upload a video to analyze construction site activity.</CardDescription>
            </CardHeader>
            <CardContent>
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoUpload}
                className="hidden"
                ref={fileInputRef}
              />
              <Button onClick={triggerFileInput} disabled={isAnalyzing} className="mb-4">
                {videoFile ? `Change Video` : 'Upload Video'}
              </Button>
              {videoFile && <p>Selected Video: {videoFile.name}</p>}
              {uploadProgress > 0 && (
                <Progress value={uploadProgress} className="max-w-sm" />
              )}
            </CardContent>
            <CardFooter>
              <Button onClick={handleAnalyze} disabled={!videoFile || isAnalyzing}>
                {isAnalyzing ? 'Analyzing...' : 'Analyze Video'}
              </Button>
            </CardFooter>
          </Card>
        </section>

        {/* Analysis Report Section */}
        {analysisResult && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Analysis Report</h2>
            <AnalysisReport data={analysisResult} />
          </section>
        )}

        {/* User Projects Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Your Projects</h2>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Project Name</TableHead>
                  <TableHead>Date Started</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {userProjects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell className="font-medium">{project.name}</TableCell>
                    <TableCell>{project.date}</TableCell>
                    <TableCell>{project.progress}%</TableCell>
                    <TableCell className="text-right">
                      <Link to={`/project/${project.id}`}>
                        <Button variant="secondary" size="sm">View Details</Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </div>
    </Shell>
  );
};

export default Dashboard;
