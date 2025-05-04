
import React from 'react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-white to-gray-100 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="col-span-1 md:col-span-6 space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight gradient-text">
                  AI-Powered Construction Site Analysis
                </h1>
                <p className="text-xl text-gray-600 max-w-[600px]">
                  Transform your construction site management with intelligent video analysis and automated reporting.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Link to="/dashboard">
                    <Button size="lg" className="bg-construct-600 hover:bg-construct-700">
                      Get Started
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button size="lg" variant="outline">
                      Learn more
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="col-span-1 md:col-span-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-construct-600 rounded-lg blur-xl opacity-20 animate-pulse"></div>
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="Construction site with workers and equipment"
                    className="relative rounded-lg w-full object-cover shadow-xl"
                    style={{ aspectRatio: '16/9' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Key Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our advanced AI-powered platform provides comprehensive analysis and insights for construction site management.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                <div className="bg-construct-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-construct-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Real-time Monitoring</h3>
                <p className="text-gray-600">
                  Advanced computer vision identifies workers, vehicles, and equipment to provide real-time site activity monitoring.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                <div className="bg-construct-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-construct-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Safety Compliance</h3>
                <p className="text-gray-600">
                  Detect safety gear usage, identify potential hazards, and ensure compliance with safety regulations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                <div className="bg-construct-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-construct-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Automated Reports</h3>
                <p className="text-gray-600">
                  Generate detailed reports with resource utilization metrics, progress tracking, and actionable insights.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="bg-gray-50 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our simple three-step process makes construction site analysis easy and efficient.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-construct-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Upload Site Videos</h3>
                <p className="text-gray-600">
                  Upload construction site footage from any camera or drone in common video formats.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-construct-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
                <p className="text-gray-600">
                  Our advanced AI models process the video to identify workers, vehicles, equipment, and safety issues.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-construct-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Get Detailed Reports</h3>
                <p className="text-gray-600">
                  Receive comprehensive reports with visualized data, insights, and actionable recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-construct-600 text-white py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Construction Management?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of construction professionals using Construct.AI to improve safety, efficiency, and project management.
              </p>
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="bg-white text-construct-600 hover:bg-gray-100">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
