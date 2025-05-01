
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
  DialogFooter,
} from "@/components/ui/dialog";
import { LostFoundReport } from '@/types/admin';

const LostFoundReports = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [viewReport, setViewReport] = useState<LostFoundReport | null>(null);
  
  // Mock lost & found reports data
  const lostFoundReports: LostFoundReport[] = [
    {
      id: "1",
      reportType: "lost",
      petName: "Charlie",
      petType: "Dog",
      breed: "Poodle",
      location: "Central Park, New York",
      reporterName: "Jennifer Adams",
      contactInfo: "jennifer@example.com, 555-111-2222",
      reportedDate: "2023-04-16",
      description: "Small white poodle with blue collar, responds to Charlie. Last seen near the lake.",
      status: "pending"
    },
    {
      id: "2",
      reportType: "found",
      petName: "Unknown",
      petType: "Cat",
      breed: "Calico",
      location: "Main St & 5th Ave, Seattle",
      reporterName: "Robert Jackson",
      contactInfo: "robert@example.com, 555-333-4444",
      reportedDate: "2023-04-15",
      description: "Female calico cat, very friendly. No collar, but appears well-cared for.",
      status: "resolved"
    },
    {
      id: "3",
      reportType: "lost",
      petName: "Buddy",
      petType: "Dog",
      breed: "Golden Retriever",
      location: "Lincoln Park, Chicago",
      reporterName: "Patricia Miller",
      contactInfo: "patricia@example.com, 555-555-6666",
      reportedDate: "2023-04-14",
      description: "Golden retriever with red collar and ID tag. Very friendly and responds to Buddy.",
      status: "closed"
    }
  ];
  
  const filteredReports = lostFoundReports.filter(report => {
    const matchesSearch = 
      report.petName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.location.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesType = typeFilter === 'all' || report.reportType === typeFilter;
    const matchesStatus = statusFilter === 'all' || report.status === statusFilter;
    
    return matchesSearch && matchesType && matchesStatus;
  });
  
  const handleViewReport = (report: LostFoundReport) => {
    setViewReport(report);
  };
  
  const handleUpdateStatus = (id: string, newStatus: "pending" | "resolved" | "closed") => {
    // Here you would update the status in your backend
    console.log(`Updating report ${id} status to ${newStatus}`);
    
    // Close dialog if it's open for this report
    if (viewReport?.id === id) {
      setViewReport(null);
    }
  };
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <Input
            placeholder="Search by pet, breed, or location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Report Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="lost">Lost</SelectItem>
            <SelectItem value="found">Found</SelectItem>
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="resolved">Resolved</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Pet</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Reported Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredReports.length > 0 ? (
            filteredReports.map((report) => (
              <TableRow key={report.id}>
                <TableCell>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    report.reportType === 'lost' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {report.reportType === 'lost' ? 'Lost' : 'Found'}
                  </span>
                </TableCell>
                <TableCell>
                  {report.petName !== 'Unknown' ? report.petName : ''} 
                  ({report.petType}, {report.breed})
                </TableCell>
                <TableCell>{report.location}</TableCell>
                <TableCell>{report.reportedDate}</TableCell>
                <TableCell>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    report.status === 'resolved' ? 'bg-blue-100 text-blue-800' :
                    report.status === 'closed' ? 'bg-gray-100 text-gray-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleViewReport(report)}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-6 text-gray-500">
                No reports found matching your filters.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      
      {/* Report details dialog */}
      {viewReport && (
        <Dialog open={!!viewReport} onOpenChange={() => setViewReport(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {viewReport.reportType === 'lost' ? 'Lost Pet Report' : 'Found Pet Report'}
              </DialogTitle>
              <DialogDescription>
                Reported on {viewReport.reportedDate}
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              <div>
                <h4 className="font-semibold mb-2">Pet Information</h4>
                {viewReport.petName !== 'Unknown' && (
                  <p><span className="font-medium">Name:</span> {viewReport.petName}</p>
                )}
                <p><span className="font-medium">Type:</span> {viewReport.petType}</p>
                <p><span className="font-medium">Breed:</span> {viewReport.breed}</p>
                <p><span className="font-medium">Location:</span> {viewReport.location}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Reporter Information</h4>
                <p><span className="font-medium">Name:</span> {viewReport.reporterName}</p>
                <p><span className="font-medium">Contact:</span> {viewReport.contactInfo}</p>
              </div>
              
              <div className="md:col-span-2">
                <h4 className="font-semibold mb-2">Description</h4>
                <p className="bg-gray-50 p-3 rounded">{viewReport.description}</p>
              </div>
            </div>
            
            <DialogFooter className="border-t pt-4 mt-2">
              <div className="w-full">
                <h4 className="font-semibold mb-2">Update Status</h4>
                <div className="flex justify-start space-x-3">
                  <Button 
                    variant={viewReport.status === 'resolved' ? 'default' : 'outline'} 
                    className={viewReport.status === 'resolved' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                    onClick={() => handleUpdateStatus(viewReport.id, "resolved")}
                  >
                    Mark as Resolved
                  </Button>
                  <Button 
                    variant={viewReport.status === 'closed' ? 'default' : 'outline'} 
                    onClick={() => handleUpdateStatus(viewReport.id, "closed")}
                  >
                    Close Report
                  </Button>
                  <Button 
                    variant={viewReport.status === 'pending' ? 'default' : 'outline'}
                    onClick={() => handleUpdateStatus(viewReport.id, "pending")}
                  >
                    Mark as Pending
                  </Button>
                </div>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default LostFoundReports;
