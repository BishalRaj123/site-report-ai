
import { AnalysisData } from '@/components/AnalysisReport';

export const generateSampleData = (): AnalysisData => {
  return {
    workers: {
      count: 24,
      withSafetyGear: 21,
      withoutSafetyGear: 3,
      active: 18,
      idle: 6,
      byTimeOfDay: [
        { time: '8:00 AM', count: 22 },
        { time: '10:00 AM', count: 24 },
        { time: '12:00 PM', count: 18 },
        { time: '2:00 PM', count: 23 },
        { time: '4:00 PM', count: 24 },
      ]
    },
    vehicles: {
      count: 8,
      types: [
        { name: 'Dump Truck', count: 3 },
        { name: 'Excavator', count: 2 },
        { name: 'Bulldozer', count: 1 },
        { name: 'Concrete Mixer', count: 2 },
      ],
      active: 6,
      idle: 2,
    },
    equipment: {
      count: 12,
      types: [
        { name: 'Crane', count: 1 },
        { name: 'Generator', count: 3 },
        { name: 'Compressor', count: 2 },
        { name: 'Welder', count: 4 },
        { name: 'Jackhammer', count: 2 },
      ],
      active: 9,
      idle: 3,
    },
    hazards: {
      identified: 5,
      types: [
        { name: 'Tripping Hazard', count: 2 },
        { name: 'Falling Objects', count: 1 },
        { name: 'Electrical', count: 1 },
        { name: 'Chemical Spill', count: 1 },
      ],
      severity: [
        { level: 'Low', count: 2 },
        { level: 'Medium', count: 2 },
        { level: 'High', count: 1 },
      ],
    },
    progress: {
      completionPercentage: 68,
      estimatedTimeRemaining: '12 days',
      milestone: 'Structural framework completion',
    },
  };
};

export const simulateAnalysis = (videoFile: File): Promise<AnalysisData> => {
  // In a real app, this would send the video to a backend API
  // and receive the actual analysis results
  
  return new Promise((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      // For now, return sample data
      resolve(generateSampleData());
    }, 3000);
  });
};
