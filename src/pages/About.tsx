
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-white to-gray-100 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                About Construct.AI
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We're revolutionizing construction site management through intelligent video analysis and automated reporting.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Mission Section */}
        <section className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-4">
                  At Construct.AI, our mission is to enhance construction site efficiency, safety, and productivity 
                  through cutting-edge artificial intelligence and computer vision technology.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  We believe that by providing actionable insights from construction site videos, we can help project 
                  managers make better decisions, improve safety compliance, and optimize resource utilization.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <div className="text-3xl font-bold text-construct-600 mb-2">200+</div>
                    <div className="text-sm text-gray-600">Projects Analyzed</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <div className="text-3xl font-bold text-construct-600 mb-2">98%</div>
                    <div className="text-sm text-gray-600">Detection Accuracy</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <div className="text-3xl font-bold text-construct-600 mb-2">15+</div>
                    <div className="text-sm text-gray-600">Countries Served</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <div className="text-3xl font-bold text-construct-600 mb-2">30%</div>
                    <div className="text-sm text-gray-600">Efficiency Improvement</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-construct-600 rounded-lg blur-xl opacity-20 animate-pulse-slow"></div>
                <img
                  src="https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
                  alt="Construction site engineers reviewing plans"
                  className="relative rounded-lg shadow-xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Technology Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Technology</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Construct.AI leverages state-of-the-art AI and machine learning algorithms to analyze construction site videos.
              </p>
            </div>
            
            <Tabs defaultValue="vision" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="vision">Computer Vision</TabsTrigger>
                <TabsTrigger value="ml">Machine Learning</TabsTrigger>
                <TabsTrigger value="analytics">Advanced Analytics</TabsTrigger>
              </TabsList>
              <TabsContent value="vision">
                <Card>
                  <CardHeader>
                    <CardTitle>Computer Vision Technology</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Our computer vision algorithms are trained on millions of construction site images to accurately 
                      identify and track workers, vehicles, equipment, and potential safety hazards.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-medium mb-2">Object Detection</h4>
                        <p className="text-sm text-gray-600">
                          Identifies and classifies construction site elements with 98% accuracy
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-medium mb-2">Activity Recognition</h4>
                        <p className="text-sm text-gray-600">
                          Distinguishes between active work, idle time, and unsafe behaviors
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-medium mb-2">Safety Gear Detection</h4>
                        <p className="text-sm text-gray-600">
                          Identifies whether workers are wearing proper safety equipment
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-medium mb-2">Hazard Detection</h4>
                        <p className="text-sm text-gray-600">
                          Automatically flags potential safety hazards on the construction site
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="ml">
                <Card>
                  <CardHeader>
                    <CardTitle>Machine Learning Models</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Our machine learning models continuously improve by learning from every video analysis, 
                      enhancing accuracy and expanding detection capabilities over time.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-medium mb-2">Neural Networks</h4>
                        <p className="text-sm text-gray-600">
                          Deep learning networks trained specifically for construction environments
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-medium mb-2">Transfer Learning</h4>
                        <p className="text-sm text-gray-600">
                          Models that adapt to specific construction site conditions and requirements
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-medium mb-2">Pattern Recognition</h4>
                        <p className="text-sm text-gray-600">
                          Identifies patterns in worker behavior and equipment utilization
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-medium mb-2">Predictive Modeling</h4>
                        <p className="text-sm text-gray-600">
                          Forecasts project timelines based on current progress and historical data
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="analytics">
                <Card>
                  <CardHeader>
                    <CardTitle>Advanced Analytics Platform</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Our analytics engine transforms raw data into actionable insights, helping project managers 
                      make informed decisions about resource allocation, safety improvements, and project timelines.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-medium mb-2">Real-time Dashboards</h4>
                        <p className="text-sm text-gray-600">
                          Visualized data and metrics updated in real-time as analysis occurs
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-medium mb-2">Trend Analysis</h4>
                        <p className="text-sm text-gray-600">
                          Identifies patterns over time to optimize scheduling and resource allocation
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-medium mb-2">Custom Reporting</h4>
                        <p className="text-sm text-gray-600">
                          Generates tailored reports focused on your specific project needs
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-medium mb-2">Anomaly Detection</h4>
                        <p className="text-sm text-gray-600">
                          Automatically flags unusual activities or deviations from expected patterns
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Our Team Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the experts behind Construct.AI's innovative technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="mb-4 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" 
                    alt="CEO" 
                    className="rounded-full w-32 h-32 object-cover mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold">David Chen</h3>
                <p className="text-construct-600">CEO & Co-Founder</p>
                <p className="text-gray-600 mt-2">
                  Former construction executive with 15 years of experience in project management.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80" 
                    alt="CTO" 
                    className="rounded-full w-32 h-32 object-cover mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold">Dr. Sarah Johnson</h3>
                <p className="text-construct-600">CTO & Co-Founder</p>
                <p className="text-gray-600 mt-2">
                  PhD in Computer Vision with expertise in AI and machine learning technologies.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" 
                    alt="CPO" 
                    className="rounded-full w-32 h-32 object-cover mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold">Michael Rodriguez</h3>
                <p className="text-construct-600">Chief Product Officer</p>
                <p className="text-gray-600 mt-2">
                  Product strategist with a background in developing solutions for the construction industry.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" 
                    alt="COO" 
                    className="rounded-full w-32 h-32 object-cover mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold">Jennifer Lee</h3>
                <p className="text-construct-600">Chief Operations Officer</p>
                <p className="text-gray-600 mt-2">
                  Operations expert with experience scaling tech solutions in construction environments.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" className="min-w-[200px]">
                View Full Team
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-br from-construct-600 to-construct-800 text-white py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Construction Site Management?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join industry leaders already using Construct.AI to improve safety, efficiency, and project outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/dashboard">
                  <Button size="lg" variant="secondary">
                    Try Free Demo
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white/10">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
