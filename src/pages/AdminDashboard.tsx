
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, FileText, CheckCircle, XCircle, Search, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdoptionRequests from '@/components/admin/AdoptionRequests';
import RehomingRequests from '@/components/admin/RehomingRequests';
import LostFoundReports from '@/components/admin/LostFoundReports';
import AddPetForm from '@/components/admin/AddPetForm';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-xl font-bold text-pet-blue">
              PetPals
            </Link>
            <span className="text-gray-500 font-medium">Admin Dashboard</span>
          </div>
          <Link to="/" className="text-sm text-gray-600 hover:text-pet-blue flex items-center gap-1">
            <Home size={16} />
            Return to Website
          </Link>
        </div>
      </header>
      
      {/* Admin Dashboard Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab}
          defaultValue="overview" 
          className="w-full"
        >
          <TabsList className="grid grid-cols-5 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="adoptions">Adoption Requests</TabsTrigger>
            <TabsTrigger value="rehoming">Rehoming Requests</TabsTrigger>
            <TabsTrigger value="lost-found">Lost & Found</TabsTrigger>
            <TabsTrigger value="add-pet">Add New Pet</TabsTrigger>
          </TabsList>
          
          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    Pending Adoption Requests
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-gray-500 mt-1">4 new since yesterday</p>
                  <Button variant="outline" size="sm" className="mt-4 w-full" onClick={() => setActiveTab('adoptions')}>
                    View All
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    Pending Rehoming Requests
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-gray-500 mt-1">2 new since yesterday</p>
                  <Button variant="outline" size="sm" className="mt-4 w-full" onClick={() => setActiveTab('rehoming')}>
                    View All
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    Lost & Found Reports
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-gray-500 mt-1">1 new since yesterday</p>
                  <Button variant="outline" size="sm" className="mt-4 w-full" onClick={() => setActiveTab('lost-found')}>
                    View All
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    Available Pets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-gray-500 mt-1">3 adopted this week</p>
                  <Button variant="outline" size="sm" className="mt-4 w-full" onClick={() => setActiveTab('add-pet')}>
                    Add New Pet
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Adoption Requests</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[1, 2, 3].map(item => (
                    <div key={item} className="flex items-center justify-between border-b pb-2">
                      <div>
                        <p className="font-medium">Request for Bella</p>
                        <p className="text-sm text-gray-500">From John Doe • 2 days ago</p>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <XCircle className="h-4 w-4 text-red-600" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <FileText className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Rehoming Requests</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[1, 2, 3].map(item => (
                    <div key={item} className="flex items-center justify-between border-b pb-2">
                      <div>
                        <p className="font-medium">Max (Golden Retriever)</p>
                        <p className="text-sm text-gray-500">From Sarah Williams • 1 day ago</p>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <XCircle className="h-4 w-4 text-red-600" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <FileText className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Adoption Requests Tab */}
          <TabsContent value="adoptions">
            <Card>
              <CardHeader>
                <CardTitle>Adoption Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <AdoptionRequests />
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Rehoming Requests Tab */}
          <TabsContent value="rehoming">
            <Card>
              <CardHeader>
                <CardTitle>Rehoming Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <RehomingRequests />
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Lost & Found Tab */}
          <TabsContent value="lost-found">
            <Card>
              <CardHeader>
                <CardTitle>Lost & Found Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <LostFoundReports />
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Add New Pet Tab */}
          <TabsContent value="add-pet">
            <Card>
              <CardHeader>
                <CardTitle>Add New Pet</CardTitle>
              </CardHeader>
              <CardContent>
                <AddPetForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
