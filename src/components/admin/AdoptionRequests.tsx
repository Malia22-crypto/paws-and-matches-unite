
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
import { AdoptionRequest } from '@/types/admin';
import { sendAdoptionApprovedNotification } from '@/services/notificationService';
import { toast } from '@/components/ui/use-toast';

const AdoptionRequests = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [viewRequest, setViewRequest] = useState<AdoptionRequest | null>(null);
  
  // Mock adoption requests data
  const [adoptionRequests, setAdoptionRequests] = useState<AdoptionRequest[]>([
    {
      id: "1",
      petName: "Bella",
      petType: "Dog",
      applicantName: "John Smith",
      email: "john@example.com",
      phone: "555-123-4567",
      submittedDate: "2023-04-15",
      status: "pending"
    },
    {
      id: "2",
      petName: "Max",
      petType: "Dog",
      applicantName: "Sarah Johnson",
      email: "sarah@example.com",
      phone: "555-987-6543",
      submittedDate: "2023-04-10",
      status: "approved"
    },
    {
      id: "3",
      petName: "Oliver",
      petType: "Cat",
      applicantName: "Michael Brown",
      email: "michael@example.com",
      phone: "555-456-7890",
      submittedDate: "2023-04-12",
      status: "rejected"
    }
  ]);
  
  const filteredRequests = adoptionRequests.filter(request => {
    const matchesSearch = 
      request.petName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.applicantName.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesStatus = statusFilter === 'all' || request.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  const handleViewRequest = (request: AdoptionRequest) => {
    setViewRequest(request);
  };
  
  const handleUpdateStatus = async (id: string, newStatus: "pending" | "approved" | "rejected") => {
    // Find the request
    const request = adoptionRequests.find(req => req.id === id);
    if (!request) return;
    
    // Update the status
    setAdoptionRequests(prevRequests => 
      prevRequests.map(req => 
        req.id === id ? { ...req, status: newStatus } : req
      )
    );
    
    // If the status is changed to approved, send an email notification
    if (newStatus === "approved" && request.status !== "approved") {
      try {
        await sendAdoptionApprovedNotification(
          request.email,
          request.applicantName,
          request.petName
        );
        
        toast({
          title: "Status Updated",
          description: `The adoption request has been ${newStatus} and the applicant has been notified via email.`,
        });
      } catch (error) {
        console.error("Failed to send notification:", error);
        toast({
          title: "Status Updated",
          description: `The adoption request has been ${newStatus}, but there was an issue sending the notification email.`,
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Status Updated",
        description: `The adoption request has been marked as ${newStatus}.`,
      });
    }
    
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
            placeholder="Search by pet or applicant name"
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
            <TableHead>Applicant</TableHead>
            <TableHead>Date</TableHead>
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
                <TableCell>{request.applicantName}</TableCell>
                <TableCell>{request.submittedDate}</TableCell>
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
                No adoption requests found matching your filters.
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
              <DialogTitle>Adoption Request for {viewRequest.petName}</DialogTitle>
              <DialogDescription>
                Submitted on {viewRequest.submittedDate}
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              <div>
                <h4 className="font-semibold mb-2">Pet Information</h4>
                <p><span className="font-medium">Name:</span> {viewRequest.petName}</p>
                <p><span className="font-medium">Type:</span> {viewRequest.petType}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Applicant Information</h4>
                <p><span className="font-medium">Name:</span> {viewRequest.applicantName}</p>
                <p><span className="font-medium">Email:</span> {viewRequest.email}</p>
                <p><span className="font-medium">Phone:</span> {viewRequest.phone}</p>
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

export default AdoptionRequests;
