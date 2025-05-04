
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoUpload from '@/components/VideoUpload';
import AnalysisReport from '@/components/AnalysisReport';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { analyzeVideo, fetchUserProjects } from '@/services/apiService';
import { AnalysisData } from '@/components/AnalysisReport';
import { useToast } from '@/hooks/use-toast';
import { BarChart, Activity, FileVideo, Clock } from 'lucide-react';

const Dashboard = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
  const [analysisData, setAnalysisData] = useState<AnalysisData | null>(null);
  const [projects, setProjects] = useState<any[]>([]);
  const { toast } = useToast();

  React.useEffect(() => {
    // Fetch user's projects
    const loadProjects = async () => {
      try {
        const projectData = await fetchUserProjects();
        setProjects(projectData);
      } catch (error) {
        console.error('Error fetching projects:', error);
        toast({
          title: "Error loading projects",
          description: "Could not load your projects. Please try again later.",
          variant: "destructive"
        });
      }
    };
    
    loadProjects();
  }, []);

  const handleVideoUploaded = (file: File) => {
    setSelectedVideo(file);
    toast({
      title: "Video uploaded",
      description: "Your video is ready for analysis.",
    });
  };

  const handleAnalyzeVideo = async () => {
    if (!selectedVideo) return;
    
    setIsAnalyzing(true);
    
    try {
      toast({
        title: "Analysis started",
        description: "Your video is being processed. This may take a few moments.",
      });
      
      const result = await analyzeVideo(selectedVideo);
      setAnalysisData(result);
      
      toast({
        title: "Analysis complete",
        description: "Your video analysis has been completed successfully.",
      });
    } catch (error) {
      console.error('Analysis error:', error);
      toast({
        title: "Analysis failed",
        description: "There was an error analyzing your video. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          
          <Tabs defaultValue="upload">
            <TabsList className="mb-8">
              <TabsTrigger value="upload" className="text-base">
                <FileVideo className="mr-2 h-4 w-4" />
                Upload & Analyze
              </TabsTrigger>
              <TabsTrigger value="reports" className="text-base">
                <BarChart className="mr-2 h-4 w-4" />
                Reports
              </TabsTrigger>
              <TabsTrigger value="projects" className="text-base">
                <Activity className="mr-2 h-4 w-4" />
                Projects
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="upload" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Upload Construction Site Video</CardTitle>
                      <CardDescription>
                        Upload a video of your construction site for AI-powered analysis
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <VideoUpload onVideoUploaded={handleVideoUploaded} />
                      
                      {selectedVideo && (
                        <div className="mt-6">
                          <Button 
                            onClick={handleAnalyzeVideo}
                            disabled={isAnalyzing}
                            className="w-full bg-construct-600 hover:bg-construct-700"
                          >
                            {isAnalyzing ? (
                              <>
                                <span className="mr-2">Analyzing Video...</span>
                                <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                              </>
                            ) : 'Analyze Video'}
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                  
                  {/* Tips Card */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Tips for Best Results</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 bg-green-100 text-green-800 rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span>Use clear, high-resolution videos for more accurate analysis</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 bg-green-100 text-green-800 rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span>Capture the entire construction site for comprehensive analysis</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 bg-green-100 text-green-800 rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span>Videos recorded during daylight hours yield more accurate results</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 bg-green-100 text-green-800 rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span>Shorter videos (2-5 minutes) process faster than long videos</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  {analysisData ? (
                    <AnalysisReport data={analysisData} />
                  ) : (
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle>Analysis Results</CardTitle>
                        <CardDescription>
                          Upload a video and run analysis to see results here
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex flex-col items-center justify-center h-64">
                        <BarChart className="w-16 h-16 text-gray-300 mb-4" />
                        <p className="text-gray-500 text-center max-w-xs">
                          {selectedVideo 
                            ? "Click 'Analyze Video' to start the analysis process"
                            : "Upload a construction site video to get started with AI analysis"}
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reports">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Reports</CardTitle>
                  <CardDescription>
                    View and manage your recent construction site analysis reports
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {analysisData ? (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold">
                          Site Analysis Report - {new Date().toLocaleDateString()}
                        </h3>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                            Export
                          </Button>
                          <Button variant="outline" size="sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                            </svg>
                            Print
                          </Button>
                          <Button variant="outline" size="sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                            Share
                          </Button>
                        </div>
                      </div>
                      
                      <AnalysisReport data={analysisData} />
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Clock className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">No reports yet</h3>
                      <p className="text-gray-500 mb-4">
                        Upload and analyze your first construction site video to generate a report
                      </p>
                      <Button 
                        onClick={() => document.querySelector('[data-value="upload"]')?.click()}
                        className="bg-construct-600 hover:bg-construct-700"
                      >
                        Upload a Video
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="projects">
              <Card>
                <CardHeader>
                  <CardTitle>Your Projects</CardTitle>
                  <CardDescription>
                    Manage your construction projects and their analysis reports
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {projects.length > 0 ? (
                    <div className="space-y-4">
                      {projects.map((project) => (
                        <div key={project.id} className="border rounded-lg p-4 flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">{project.name}</h3>
                            <p className="text-sm text-gray-500">
                              Last updated: {project.date}
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center">
                              <div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
                                <div 
                                  className="bg-construct-600 h-2.5 rounded-full" 
                                  style={{ width: `${project.progress}%` }}
                                ></div>
                              </div>
                              <span className="text-sm text-gray-600">{project.progress}%</span>
                            </div>
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </div>
                        </div>
                      ))}
                      
                      <Button className="w-full mt-4 border-dashed">
                        + Add New Project
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Activity className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">No projects yet</h3>
                      <p className="text-gray-500 mb-4">
                        Create your first project to start tracking construction progress
                      </p>
                      <Button className="bg-construct-600 hover:bg-construct-700">
                        Create New Project
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
