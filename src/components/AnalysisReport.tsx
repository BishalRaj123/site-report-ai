
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

export interface AnalysisData {
  workers: {
    count: number;
    withSafetyGear: number;
    withoutSafetyGear: number;
    active: number;
    idle: number;
    byTimeOfDay: { time: string; count: number }[];
  };
  vehicles: {
    count: number;
    types: { name: string; count: number }[];
    active: number;
    idle: number;
  };
  equipment: {
    count: number;
    types: { name: string; count: number }[];
    active: number;
    idle: number;
  };
  hazards: {
    identified: number;
    types: { name: string; count: number }[];
    severity: { level: string; count: number }[];
  };
  progress: {
    completionPercentage: number;
    estimatedTimeRemaining: string;
    milestone: string;
  };
}

interface AnalysisReportProps {
  data: AnalysisData;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const AnalysisReport: React.FC<AnalysisReportProps> = ({ data }) => {
  const workerSafetyData = [
    { name: 'With Safety Gear', value: data.workers.withSafetyGear },
    { name: 'Without Safety Gear', value: data.workers.withoutSafetyGear },
  ];

  const workerActivityData = [
    { name: 'Active', value: data.workers.active },
    { name: 'Idle', value: data.workers.idle },
  ];

  const vehicleData = data.vehicles.types;
  const equipmentData = data.equipment.types;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Site Activity Summary</CardTitle>
          <CardDescription>
            Analysis generated {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Workers</h3>
              <div className="text-3xl font-bold text-construct-600">{data.workers.count}</div>
              <div className="text-sm text-gray-500 mt-1">People on site</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Vehicles</h3>
              <div className="text-3xl font-bold text-construct-600">{data.vehicles.count}</div>
              <div className="text-sm text-gray-500 mt-1">Vehicles identified</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Equipment</h3>
              <div className="text-3xl font-bold text-construct-600">{data.equipment.count}</div>
              <div className="text-sm text-gray-500 mt-1">Machinery in use</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="workers">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="workers">Workers</TabsTrigger>
          <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
          <TabsTrigger value="equipment">Equipment</TabsTrigger>
          <TabsTrigger value="hazards">Hazards</TabsTrigger>
        </TabsList>
        
        {/* Workers Tab */}
        <TabsContent value="workers">
          <Card>
            <CardHeader>
              <CardTitle>Worker Analysis</CardTitle>
              <CardDescription>
                Detailed breakdown of worker activity and safety compliance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Safety gear chart */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Safety Compliance</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={workerSafetyData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {workerSafetyData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 0 ? '#4ade80' : '#f87171'} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Safety Compliance Rate</span>
                      <span className="text-sm font-medium">
                        {Math.round((data.workers.withSafetyGear / data.workers.count) * 100)}%
                      </span>
                    </div>
                    <Progress 
                      value={(data.workers.withSafetyGear / data.workers.count) * 100} 
                      className={`h-2 ${(data.workers.withSafetyGear / data.workers.count) >= 0.9 ? 'bg-green-500' : 'bg-amber-500'}`}
                    />
                  </div>
                </div>
                
                {/* Worker activity chart */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Worker Activity</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={workerActivityData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {workerActivityData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 0 ? '#3b82f6' : '#cbd5e1'} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Productivity Rate</span>
                      <span className="text-sm font-medium">
                        {Math.round((data.workers.active / data.workers.count) * 100)}%
                      </span>
                    </div>
                    <Progress 
                      value={(data.workers.active / data.workers.count) * 100} 
                      className="h-2"
                    />
                  </div>
                </div>
              </div>
              
              {/* Worker time of day chart */}
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Worker Count By Time of Day</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={data.workers.byTimeOfDay}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="count" fill="#3b82f6" name="Worker Count" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Vehicles Tab */}
        <TabsContent value="vehicles">
          <Card>
            <CardHeader>
              <CardTitle>Vehicle Analysis</CardTitle>
              <CardDescription>
                Details about vehicles present on the construction site
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Vehicle types chart */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Vehicle Types</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        layout="vertical"
                        data={vehicleData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 70,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis type="category" dataKey="name" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#8884d8" name="Count" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                {/* Vehicle activity */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Vehicle Activity</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[
                            { name: 'Active', value: data.vehicles.active },
                            { name: 'Idle', value: data.vehicles.idle },
                          ]}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          <Cell fill="#3b82f6" />
                          <Cell fill="#cbd5e1" />
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Vehicle Utilization</span>
                      <span className="text-sm font-medium">
                        {Math.round((data.vehicles.active / data.vehicles.count) * 100)}%
                      </span>
                    </div>
                    <Progress 
                      value={(data.vehicles.active / data.vehicles.count) * 100} 
                      className="h-2"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Equipment Tab */}
        <TabsContent value="equipment">
          <Card>
            <CardHeader>
              <CardTitle>Equipment Analysis</CardTitle>
              <CardDescription>
                Analysis of construction equipment usage and efficiency
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Equipment types chart */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Equipment Types</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={equipmentData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="count"
                        >
                          {equipmentData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                {/* Equipment activity */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Equipment Activity</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[
                            { name: 'Active', value: data.equipment.active },
                            { name: 'Idle', value: data.equipment.idle },
                          ]}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          <Cell fill="#3b82f6" />
                          <Cell fill="#cbd5e1" />
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Equipment Utilization</span>
                      <span className="text-sm font-medium">
                        {Math.round((data.equipment.active / data.equipment.count) * 100)}%
                      </span>
                    </div>
                    <Progress 
                      value={(data.equipment.active / data.equipment.count) * 100} 
                      className="h-2"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Hazards Tab */}
        <TabsContent value="hazards">
          <Card>
            <CardHeader>
              <CardTitle>Hazard Analysis</CardTitle>
              <CardDescription>
                Safety hazards identified on the construction site
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Hazard types chart */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Hazard Types</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        layout="vertical"
                        data={data.hazards.types}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 70,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis type="category" dataKey="name" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#f97316" name="Count" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                {/* Hazard severity */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Hazard Severity</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={data.hazards.severity}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ level, percent }) => `${level}: ${(percent * 100).toFixed(0)}%`}
                          nameKey="level"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="count"
                        >
                          <Cell fill="#22c55e" /> {/* Low */}
                          <Cell fill="#f97316" /> {/* Medium */}
                          <Cell fill="#ef4444" /> {/* High */}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-2">Project Progress</h3>
                <div className="mb-6">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Completion Progress</span>
                    <span className="text-sm font-medium">{data.progress.completionPercentage}%</span>
                  </div>
                  <Progress value={data.progress.completionPercentage} className="h-2" />
                  <div className="text-sm text-gray-500 mt-1">
                    Current milestone: {data.progress.milestone}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Estimated time remaining: {data.progress.estimatedTimeRemaining}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalysisReport;
