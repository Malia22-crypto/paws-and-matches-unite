
import React, { useState } from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, X, FileText, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

// Mock data for rehoming requests
const mockRehomingRequests = [
  {
    id: '1',
    petName: 'Max',
    petType: 'Dog',
    breed: 'Golden Retriever',
    age: '3 years',
    ownerName: 'Sarah Williams',
    reason: 'Moving to apartment that doesn\'t allow pets',
    email: 'sarah@example.com',
    phone: '(555) 123-4567',
    submittedDate: '2025-04-18',
    status: 'pending'
  },
  {
    id: '2',
    petName: 'Luna',
    petType: 'Cat',
    breed: 'Persian',
    age: '2 years',
    ownerName: 'James Brown',
    reason: 'Allergies developed in the family',
    email: 'james@example.com',
    phone: '(555) 234-5678',
    submittedDate: '2025-04-19',
    status: 'pending'
  },
  {
    id: '3',
    petName: 'Cooper',
    petType: 'Dog',
    breed: 'Beagle',
    age: '1 year',
    ownerName: 'Emily Johnson',
    reason: 'Not enough time to care for the pet',
    email: 'emily@example.com',
    phone: '(555) 345-6789',
    submittedDate: '2025-04-20',
    status: 'approved'
  },
  {
    id: '4',
    petName: 'Oliver',
    petType: 'Cat',
    breed: 'Maine Coon',
    age: '4 years',
    ownerName: 'David Miller',
    reason: 'Financial difficulties',
    email: 'david@example.com',
    phone: '(555) 456-7890',
    submittedDate: '2025-04-21',
    status: 'rejected'
  }
];

interface RehomingRequest {
  id: string;
  petName: string;
  petType: string;
  breed: string;
  age: string;
  ownerName: string;
  reason: string;
  email: string;
  phone: string;
  submittedDate: string;
  status: 'pending' | 'approved' | 'rejected';
}

const RehomingRequests = () => {
  const [requests, setRequests] = useState<RehomingRequest[]>(mockRehomingRequests);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRequest, setSelectedRequest] = useState<RehomingRequest | null>(null);
  const [viewMode, setViewMode] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  
  // Filter requests based on search term and view mode
  const filteredRequests = requests.filter(request => {
    const matchesSearch = 
      request.petName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.ownerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.breed.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (viewMode === 'all') return matchesSearch;
    return matchesSearch && request.status === viewMode;
  });
  
  const handleApprove = (id: string) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: 'approved' } : req
    ));
    
    toast({
      title: "Rehoming Request Approved",
      description: "The pet will be added to our available pets. The owner will be notified."
    });
  };
  
  const handleReject = (id: string) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: 'rejected' } : req
    ));
    
    toast({
      title: "Rehoming Request Rejected",
      description: "The rehoming request has been rejected. The owner will be notified."
    });
  };
  
  const handleView = (request: RehomingRequest) => {
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
              <TableHead>Owner</TableHead>
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
                      {request.petType}, {request.breed}, {request.age}
                    </span>
                  </TableCell>
                  <TableCell>{request.ownerName}</TableCell>
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
                  No rehoming requests found.
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
                Rehoming Request Details
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
                <p><strong>Breed:</strong> {selectedRequest.breed}</p>
                <p><strong>Age:</strong> {selectedRequest.age}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-500 mb-2">Owner Information</h4>
                <p><strong>Name:</strong> {selectedRequest.ownerName}</p>
                <p><strong>Email:</strong> {selectedRequest.email}</p>
                <p><strong>Phone:</strong> {selectedRequest.phone}</p>
              </div>
              
              <div className="md:col-span-2">
                <h4 className="font-medium text-gray-500 mb-2">Rehoming Details</h4>
                <p><strong>Reason:</strong> {selectedRequest.reason}</p>
                <p><strong>Submitted Date:</strong> {selectedRequest.submittedDate}</p>
                <p><strong>Status:</strong> {selectedRequest.status.charAt(0).toUpperCase() + selectedRequest.status.slice(1)}</p>
                
                {selectedRequest.status === 'pending' && (
                  <div className="mt-4 flex gap-2">
                    <Button onClick={() => handleApprove(selectedRequest.id)}>
                      Approve & Add to Available Pets
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

export default RehomingRequests;
