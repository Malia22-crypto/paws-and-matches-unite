
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell 
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const location = useLocation();
  
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
          <Link to="/" className="text-sm text-gray-600 hover:text-pet-blue">
            Return to Website
          </Link>
        </div>
      </header>
      
      {/* Admin Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="adoption-requests" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="adoption-requests">Adoption Requests</TabsTrigger>
            <TabsTrigger value="rehome-submissions">Rehome Submissions</TabsTrigger>
          </TabsList>
          <TabsContent value="adoption-requests" className="mt-6">
            <div className="bg-white rounded-lg shadow p-6">
              {children}
            </div>
          </TabsContent>
          <TabsContent value="rehome-submissions" className="mt-6">
            <div className="bg-white rounded-lg shadow p-6">
              {children}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminLayout;
