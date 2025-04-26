
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AdminLayout from '@/components/Layout/AdminLayout';
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

// Interfaces for adoption requests and rehome submissions
interface AdoptionRequest {
  id: string;
  petName: string;
  petId: string;
  applicantName: string;
  email: string;
  phone: string;
  dateSubmitted: string;
  status: 'pending' | 'approved' | 'rejected';
}

interface RehomeSubmission {
  id: string;
  petName: string;
  type: 'dog' | 'cat' | 'other';
  breed: string;
  age: string;
  gender: 'male' | 'female';
  reason: string;
  ownerName: string;
  email: string;
  phone: string;
  dateSubmitted: string;
  status: 'pending' | 'approved' | 'rejected';
}

const AdminPage = () => {
  const location = useLocation();
  const path = location.pathname;
  
  // Mock data for adoption requests
  const [adoptionRequests, setAdoptionRequests] = useState<AdoptionRequest[]>([
    {
      id: "ar1",
      petName: "Bella",
      petId: "1",
      applicantName: "John Doe",
      email: "john@example.com",
      phone: "(555) 123-4567",
      dateSubmitted: "2025-04-20",
      status: "pending"
    },
    {
      id: "ar2",
      petName: "Oliver",
      petId: "2",
      applicantName: "Jane Smith",
      email: "jane@example.com",
      phone: "(555) 987-6543",
      dateSubmitted: "2025-04-22",
      status: "pending"
    }
  ]);
  
  // Mock data for rehome submissions
  const [rehomeSubmissions, setRehomeSubmissions] = useState<RehomeSubmission[]>([
    {
      id: "rs1",
      petName: "Max",
      type: "dog",
      breed: "Beagle",
      age: "3 years",
      gender: "male",
      reason: "Moving to apartment that doesn't allow pets",
      ownerName: "Michael Johnson",
      email: "michael@example.com",
      phone: "(555) 456-7890",
      dateSubmitted: "2025-04-19",
      status: "pending"
    },
    {
      id: "rs2",
      petName: "Luna",
      type: "cat",
      breed: "Persian",
      age: "2 years",
      gender: "female",
      reason: "Allergies developed in the family",
      ownerName: "Sarah Williams",
      email: "sarah@example.com",
      phone: "(555) 234-5678",
      dateSubmitted: "2025-04-21",
      status: "pending"
    }
  ]);
  
  // Handle adoption request approval
  const handleApproveAdoption = (requestId: string) => {
    setAdoptionRequests(requests => 
      requests.map(req => 
        req.id === requestId ? { ...req, status: 'approved' } : req
      )
    );
    
    toast({
      title: "Adoption Approved",
      description: "The adoption request has been approved and the applicant will be notified."
    });
  };
  
  // Handle adoption request rejection
  const handleRejectAdoption = (requestId: string) => {
    setAdoptionRequests(requests => 
      requests.map(req => 
        req.id === requestId ? { ...req, status: 'rejected' } : req
      )
    );
    
    toast({
      title: "Adoption Rejected",
      description: "The adoption request has been rejected and the applicant will be notified."
    });
  };
  
  // Handle rehome submission approval
  const handleApproveRehome = (submissionId: string) => {
    setRehomeSubmissions(submissions => 
      submissions.map(sub => 
        sub.id === submissionId ? { ...sub, status: 'approved' } : sub
      )
    );
    
    toast({
      title: "Rehome Request Approved",
      description: "The pet will be added to available pets list and the owner will be notified."
    });
  };
  
  // Handle rehome submission rejection
  const handleRejectRehome = (submissionId: string) => {
    setRehomeSubmissions(submissions => 
      submissions.map(sub => 
        sub.id === submissionId ? { ...sub, status: 'rejected' } : sub
      )
    );
    
    toast({
      title: "Rehome Request Rejected",
      description: "The rehome request has been rejected and the owner will be notified."
    });
  };
  
  // Render adoption requests table
  const renderAdoptionRequests = () => (
    <div>
      <h2 className="text-xl font-bold mb-4">Pending Adoption Requests</h2>
      {adoptionRequests.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Pet Name</TableHead>
              <TableHead>Applicant</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {adoptionRequests.map(request => (
              <TableRow key={request.id}>
                <TableCell>{request.dateSubmitted}</TableCell>
                <TableCell>{request.petName}</TableCell>
                <TableCell>{request.applicantName}</TableCell>
                <TableCell>{request.email}</TableCell>
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
                  {request.status === 'pending' && (
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="bg-green-50 text-green-600 hover:bg-green-100 border-green-200"
                        onClick={() => handleApproveAdoption(request.id)}
                      >
                        Approve
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="bg-red-50 text-red-600 hover:bg-red-100 border-red-200"
                        onClick={() => handleRejectAdoption(request.id)}
                      >
                        Reject
                      </Button>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className="text-gray-500">No pending adoption requests.</p>
      )}
    </div>
  );

  // Render rehome submissions table
  const renderRehomeSubmissions = () => (
    <div>
      <h2 className="text-xl font-bold mb-4">Pending Rehome Submissions</h2>
      {rehomeSubmissions.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Pet Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Breed</TableHead>
              <TableHead>Owner</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rehomeSubmissions.map(submission => (
              <TableRow key={submission.id}>
                <TableCell>{submission.dateSubmitted}</TableCell>
                <TableCell>{submission.petName}</TableCell>
                <TableCell>{submission.type}</TableCell>
                <TableCell>{submission.breed}</TableCell>
                <TableCell>{submission.ownerName}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    submission.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    submission.status === 'approved' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell>
                  {submission.status === 'pending' && (
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="bg-green-50 text-green-600 hover:bg-green-100 border-green-200"
                        onClick={() => handleApproveRehome(submission.id)}
                      >
                        Approve
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="bg-red-50 text-red-600 hover:bg-red-100 border-red-200"
                        onClick={() => handleRejectRehome(submission.id)}
                      >
                        Reject
                      </Button>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className="text-gray-500">No pending rehome submissions.</p>
      )}
    </div>
  );
  
  // Determine which content to render based on the current URL
  const isRehomeTab = path.includes("rehome");

  return (
    <AdminLayout>
      {isRehomeTab ? renderRehomeSubmissions() : renderAdoptionRequests()}
    </AdminLayout>
  );
};

export default AdminPage;
