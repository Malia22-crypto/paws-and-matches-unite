
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
import { LostFoundReport } from '@/types/admin';
import LostFoundMatch from './LostFoundMatch';

const LostFoundReports = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [viewReport, setViewReport] = useState<LostFoundReport | null>(null);
  const [matchReport, setMatchReport] = useState<LostFoundReport | null>(null);
  
  // Mock lost & found reports data
  const [reports, setReports] = useState<LostFoundReport[]>([
    {
      id: "1",
      reportType: "lost",
      petName: "Max",
      petType: "Dog",
      breed: "Golden Retriever",
      location: "Central Park, New York",
      reporterName: "John Wilson",
      contactInfo: "john@example.com",
      reportedDate: "2023-04-18",
      description: "Medium-sized golden retriever with a blue collar. Last seen near the fountain.",
      status: "pending"
    },
    {
      id: "2",
      reportType: "found",
      petName: "",
      petType: "Cat",
      breed: "Tabby",
      location: "Main Street, Boston",
      reporterName: "Emma Davis",
      contactInfo: "emma@example.com",
      reportedDate: "2023-04-16",
      description: "Female tabby cat, very friendly. Found near the grocery store.",
      status: "pending"
    },
    {
      id: "3",
      reportType: "lost",
      petName: "Bella",
      petType: "Cat",
      breed: "Siamese",
      location: "Oak Street, Chicago",
      reporterName: "Sarah Thompson",
      contactInfo: "sarah@example.com",
      reportedDate: "2023-04-15",
      description: "Siamese cat with blue eyes. Indoor cat that got out through a window.",
      status: "resolved"
    }
  ]);
  
  const filteredReports = reports.filter(report => {
    const matchesSearch = 
      report.petType.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
    setReports(prevReports => 
      prevReports.map(report => 
        report.id === id ? { ...report, status: newStatus } : report
      )
    );
    
    // Close dialog if it's open for this report
    if (viewReport?.id === id) {
      setViewReport(null);
    }
  };

  const handleNotifyMatch = (report: LostFoundReport) => {
    setMatchReport(report);
  };
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <Input
            placeholder="Search by type, breed, or location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="lost">Lost</SelectItem>
            <SelectItem value="found">Found</SelectItem>
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Filter by status" />
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
            <TableHead>Reporter</TableHead>
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
                    report.reportType === 'lost' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {report.reportType === 'lost' ? 'Lost' : 'Found'}
                  </span>
                </TableCell>
                <TableCell>
                  {report.petName || 'Unknown'} ({report.petType}, {report.breed})
                </TableCell>
                <TableCell>{report.location}</TableCell>
                <TableCell>{report.reporterName}</TableCell>
                <TableCell>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    report.status === 'resolved' ? 'bg-green-100 text-green-800' :
                    report.status === 'closed' ? 'bg-gray-100 text-gray-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleViewReport(report)}
                    >
                      View
                    </Button>
                    {report.status === "pending" && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleNotifyMatch(report)}
                        className="bg-green-50 text-green-600 hover:bg-green-100"
                      >
                        Notify Match
                      </Button>
                    )}
                  </div>
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
                {viewReport.petName && <p><span className="font-medium">Name:</span> {viewReport.petName}</p>}
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
            
            <div className="border-t pt-4 mt-2">
              <h4 className="font-semibold mb-2">Update Status</h4>
              <div className="flex justify-start space-x-3">
                <Button 
                  variant={viewReport.status === 'resolved' ? 'default' : 'outline'} 
                  className={viewReport.status === 'resolved' ? 'bg-green-600 hover:bg-green-700' : ''}
                  onClick={() => handleUpdateStatus(viewReport.id, "resolved")}
                >
                  Mark as Resolved
                </Button>
                <Button 
                  variant={viewReport.status === 'closed' ? 'default' : 'outline'} 
                  className={viewReport.status === 'closed' ? 'bg-gray-600 hover:bg-gray-700' : ''}
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
          </DialogContent>
        </Dialog>
      )}
      
      {/* Match notification dialog */}
      <LostFoundMatch
        report={matchReport}
        onClose={() => setMatchReport(null)}
        open={!!matchReport}
      />
    </div>
  );
};

export default LostFoundReports;
