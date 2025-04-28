
import React, { useState } from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, X, FileText, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

// Mock data for adoption requests
const mockAdoptionRequests = [
  {
    id: '1',
    petName: 'Bella',
    petType: 'Dog',
    applicantName: 'John Doe',
    email: 'john@example.com',
    phone: '(555) 123-4567',
    submittedDate: '2025-04-20',
    status: 'pending'
  },
  {
    id: '2',
    petName: 'Max',
    petType: 'Dog',
    applicantName: 'Jane Smith',
    email: 'jane@example.com',
    phone: '(555) 234-5678',
    submittedDate: '2025-04-21',
    status: 'pending'
  },
  {
    id: '3',
    petName: 'Charlie',
    petType: 'Cat',
    applicantName: 'Michael Johnson',
    email: 'michael@example.com',
    phone: '(555) 345-6789',
    submittedDate: '2025-04-22',
    status: 'approved'
  },
  {
    id: '4',
    petName: 'Luna',
    petType: 'Cat',
    applicantName: 'Emily Williams',
    email: 'emily@example.com',
    phone: '(555) 456-7890',
    submittedDate: '2025-04-23',
    status: 'rejected'
  }
];

interface AdoptionRequest {
  id: string;
  petName: string;
  petType: string;
  applicantName: string;
  email: string;
  phone: string;
  submittedDate: string;
  status: 'pending' | 'approved' | 'rejected';
}

const AdoptionRequests = () => {
  const [requests, setRequests] = useState<AdoptionRequest[]>(mockAdoptionRequests);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRequest, setSelectedRequest] = useState<AdoptionRequest | null>(null);
  const [viewMode, setViewMode] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  
  // Filter requests based on search term and view mode
  const filteredRequests = requests.filter(request => {
    const matchesSearch = 
      request.petName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (viewMode === 'all') return matchesSearch;
    return matchesSearch && request.status === viewMode;
  });
  
  const handleApprove = (id: string) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: 'approved' } : req
    ));
    
    toast({
      title: "Adoption Approved",
      description: "The adoption request has been approved and the applicant will be notified."
    });
  };
  
  const handleReject = (id: string) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: 'rejected' } : req
    ));
    
    toast({
      title: "Adoption Rejected",
      description: "The adoption request has been rejected and the applicant will be notified."
    });
  };
  
  const handleView = (request: AdoptionRequest) => {
    setSelectedRequest(request);
  };
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex gap-2">
          <Button 
            variant={viewMode === 'all' ? "default" : "outline"} 
            onClick={() => setViewMode('all')}
          >
            All
          </Button>
          <Button 
            variant={viewMode === 'pending' ? "default" : "outline"} 
            onClick={() => setViewMode('pending')}
          >
            Pending
          </Button>
          <Button 
            variant={viewMode === 'approved' ? "default" : "outline"} 
            onClick={() => setViewMode('approved')}
          >
            Approved
          </Button>
          <Button 
            variant={viewMode === 'rejected' ? "default" : "outline"} 
            onClick={() => setViewMode('rejected')}
          >
            Rejected
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search requests..." 
            className="pl-8 w-full sm:w-[250px]" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Submitted</TableHead>
              <TableHead>Pet</TableHead>
              <TableHead>Applicant</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRequests.length > 0 ? (
              filteredRequests.map(request => (
                <TableRow key={request.id}>
                  <TableCell>{request.submittedDate}</TableCell>
                  <TableCell>
                    {request.petName}
                    <span className="text-gray-500 text-xs block">
                      {request.petType}
                    </span>
                  </TableCell>
                  <TableCell>{request.applicantName}</TableCell>
                  <TableCell>
                    <span className="text-xs block">{request.email}</span>
                    <span className="text-xs block">{request.phone}</span>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      request.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      request.status === 'approved' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleView(request)}
                      >
                        <FileText className="h-4 w-4" />
                      </Button>
                      {request.status === 'pending' && (
                        <>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8 text-green-600"
                            onClick={() => handleApprove(request.id)}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8 text-red-600"
                            onClick={() => handleReject(request.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-6 text-gray-500">
                  No adoption requests found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      {/* Detail View */}
      {selectedRequest && (
        <Card className="mt-6">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">
                Adoption Request Details
              </h3>
              <Button variant="outline" size="sm" onClick={() => setSelectedRequest(null)}>
                Close
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-500 mb-2">Pet Information</h4>
                <p><strong>Name:</strong> {selectedRequest.petName}</p>
                <p><strong>Type:</strong> {selectedRequest.petType}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-500 mb-2">Applicant Information</h4>
                <p><strong>Name:</strong> {selectedRequest.applicantName}</p>
                <p><strong>Email:</strong> {selectedRequest.email}</p>
                <p><strong>Phone:</strong> {selectedRequest.phone}</p>
              </div>
              
              <div className="md:col-span-2">
                <h4 className="font-medium text-gray-500 mb-2">Application Status</h4>
                <p><strong>Submitted Date:</strong> {selectedRequest.submittedDate}</p>
                <p><strong>Status:</strong> {selectedRequest.status.charAt(0).toUpperCase() + selectedRequest.status.slice(1)}</p>
                
                {selectedRequest.status === 'pending' && (
                  <div className="mt-4 flex gap-2">
                    <Button onClick={() => handleApprove(selectedRequest.id)}>
                      Approve Request
                    </Button>
                    <Button variant="outline" onClick={() => handleReject(selectedRequest.id)}>
                      Reject Request
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AdoptionRequests;
