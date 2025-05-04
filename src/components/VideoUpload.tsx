
import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { X, Upload, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface VideoUploadProps {
  onVideoUploaded: (file: File) => void;
}

const VideoUpload: React.FC<VideoUploadProps> = ({ onVideoUploaded }) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const { toast } = useToast();

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    processFile(files[0]);
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  }, []);

  const processFile = (file: File) => {
    if (!file) return;
    
    // Check if file is a video
    if (!file.type.startsWith('video/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload a video file.",
        variant: "destructive"
      });
      return;
    }
    
    setSelectedFile(file);
    
    // Create a preview for the video
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    simulateUpload(file);
  };

  const simulateUpload = (file: File) => {
    setUploading(true);
    setUploadProgress(0);
    setUploadComplete(false);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          setUploadComplete(true);
          onVideoUploaded(file);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const removeFile = () => {
    setSelectedFile(null);
    setPreview(null);
    setUploadProgress(0);
    setUploading(false);
    setUploadComplete(false);
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        {!selectedFile ? (
          <div 
            onDragEnter={handleDrag}
            className={`relative border-2 border-dashed rounded-lg p-12 text-center ${
              dragActive ? 'border-construct-600 bg-construct-50' : 'border-gray-300'
            }`}
          >
            <input
              type="file"
              accept="video/*"
              onChange={handleChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-4 text-lg font-medium text-gray-900">
              Drag and drop your video file here
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Or click to browse from your computer
            </p>
            <p className="mt-1 text-xs text-gray-500">
              MP4, MOV, AVI up to 500MB
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative">
              <video 
                src={preview || undefined} 
                className="w-full h-auto rounded-lg" 
                controls 
              />
              {!uploadComplete && (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-2 right-2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full"
                  onClick={removeFile}
                >
                  <X size={18} />
                </Button>
              )}
              {uploadComplete && (
                <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1">
                  <Check size={18} />
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium truncate max-w-[70%]">
                  {selectedFile.name}
                </span>
                <span className="text-gray-500">
                  {Math.round(selectedFile.size / 1024 / 1024 * 10) / 10} MB
                </span>
              </div>
              
              {uploading && (
                <>
                  <Progress value={uploadProgress} className="h-2" />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Uploading...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                </>
              )}
              
              {uploadComplete && (
                <p className="text-sm text-green-600 flex items-center gap-1">
                  <Check size={16} /> Upload complete
                </p>
              )}
            </div>
          </div>
        )}
            
        {/* Hidden drag overlay */}
        {dragActive && (
          <div 
            className="absolute inset-0 z-10"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></div>
        )}
      </CardContent>
    </Card>
  );
};

export default VideoUpload;
