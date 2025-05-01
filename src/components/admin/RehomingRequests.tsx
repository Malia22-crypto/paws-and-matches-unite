
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RehomingRequest } from '@/types/admin';

const RehomingRequests = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [viewRequest, setViewRequest] = useState<RehomingRequest | null>(null);
  
  // Mock rehoming requests data
  const rehomingRequests: RehomingRequest[] = [
    {
      id: "1",
      petName: "Rocky",
      petType: "Dog",
      breed: "German Shepherd",
      age: "3 years",
      ownerName: "David Wilson",
      reason: "Moving to an apartment that doesn't allow pets",
      email: "david@example.com",
      phone: "555-222-3333",
      submittedDate: "2023-04-14",
      status: "pending"
    },
    {
      id: "2",
      petName: "Whiskers",
      petType: "Cat",
      breed: "Tabby",
      age: "5 years",
      ownerName: "Emily Davis",
      reason: "Allergies developed in the family",
      email: "emily@example.com",
      phone: "555-444-5555",
      submittedDate: "2023-04-09",
      status: "approved"
    },
    {
      id: "3",
      petName: "Buddy",
      petType: "Dog",
      breed: "Beagle",
      age: "7 years",
      ownerName: "James Thompson",
      reason: "No longer able to provide adequate care due to health issues",
      email: "james@example.com",
      phone: "555-666-7777",
      submittedDate: "2023-04-11",
      status: "rejected"
    }
  ];
  
  const filteredRequests = rehomingRequests.filter(request => {
    const matchesSearch = 
      request.petName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.ownerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.breed.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesStatus = statusFilter === 'all' || request.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  const handleViewRequest = (request: RehomingRequest) => {
    setViewRequest(request);
  };
  
  const handleUpdateStatus = (id: string, newStatus: "pending" | "approved" | "rejected") => {
    // Here you would update the status in your backend
    console.log(`Updating rehoming request ${id} status to ${newStatus}`);
    
    // Close dialog if it's open for this request
    if (viewRequest?.id === id) {
      setViewRequest(null);
    }
  };
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <Input
            placeholder="Search by pet, breed, or owner name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Pet</TableHead>
            <TableHead>Breed & Age</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredRequests.length > 0 ? (
            filteredRequests.map((request) => (
              <TableRow key={request.id}>
                <TableCell>
                  {request.petName} ({request.petType})
                </TableCell>
                <TableCell>{request.breed}, {request.age}</TableCell>
                <TableCell>{request.ownerName}</TableCell>
                <TableCell>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    request.status === 'approved' ? 'bg-green-100 text-green-800' :
                    request.status === 'rejected' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleViewRequest(request)}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-6 text-gray-500">
                No rehoming requests found matching your filters.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      
      {/* Request details dialog */}
      {viewRequest && (
        <Dialog open={!!viewRequest} onOpenChange={() => setViewRequest(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Rehoming Request for {viewRequest.petName}</DialogTitle>
              <DialogDescription>
                Submitted on {viewRequest.submittedDate}
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              <div>
                <h4 className="font-semibold mb-2">Pet Information</h4>
                <p><span className="font-medium">Name:</span> {viewRequest.petName}</p>
                <p><span className="font-medium">Type:</span> {viewRequest.petType}</p>
                <p><span className="font-medium">Breed:</span> {viewRequest.breed}</p>
                <p><span className="font-medium">Age:</span> {viewRequest.age}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Owner Information</h4>
                <p><span className="font-medium">Name:</span> {viewRequest.ownerName}</p>
                <p><span className="font-medium">Email:</span> {viewRequest.email}</p>
                <p><span className="font-medium">Phone:</span> {viewRequest.phone}</p>
              </div>
              
              <div className="md:col-span-2">
                <h4 className="font-semibold mb-2">Reason for Rehoming</h4>
                <p className="bg-gray-50 p-3 rounded">{viewRequest.reason}</p>
              </div>
            </div>
            
            <div className="border-t pt-4 mt-2">
              <h4 className="font-semibold mb-2">Update Status</h4>
              <div className="flex justify-start space-x-3">
                <Button 
                  variant={viewRequest.status === 'approved' ? 'default' : 'outline'} 
                  className={viewRequest.status === 'approved' ? 'bg-green-600 hover:bg-green-700' : ''}
                  onClick={() => handleUpdateStatus(viewRequest.id, "approved")}
                >
                  Approve
                </Button>
                <Button 
                  variant={viewRequest.status === 'rejected' ? 'default' : 'outline'} 
                  className={viewRequest.status === 'rejected' ? 'bg-red-600 hover:bg-red-700' : ''}
                  onClick={() => handleUpdateStatus(viewRequest.id, "rejected")}
                >
                  Reject
                </Button>
                <Button 
                  variant={viewRequest.status === 'pending' ? 'default' : 'outline'}
                  onClick={() => handleUpdateStatus(viewRequest.id, "pending")}
                >
                  Mark as Pending
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default RehomingRequests;
