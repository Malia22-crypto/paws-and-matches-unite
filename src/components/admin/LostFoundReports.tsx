
import React, { useState } from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FileText, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from '@/components/ui/use-toast';

// Mock data for lost and found reports
const mockReports = [
  {
    id: '1',
    reportType: 'lost',
    petName: 'Buddy',
    petType: 'Dog',
    breed: 'Labrador',
    location: 'Central Park, New York',
    reporterName: 'Robert Anderson',
    contactInfo: 'robert@example.com, (555) 123-4567',
    reportedDate: '2025-04-15',
    description: 'Golden brown male Labrador, wearing a blue collar with ID tag.',
    status: 'open'
  },
  {
    id: '2',
    reportType: 'found',
    petName: 'Unknown',
    petType: 'Cat',
    breed: 'Tabby',
    location: 'Downtown, Boston',
    reporterName: 'Melissa Brown',
    contactInfo: 'melissa@example.com, (555) 234-5678',
    reportedDate: '2025-04-16',
    description: 'Gray tabby cat with white paws, no collar, seems friendly and well-fed.',
    status: 'open'
  },
  {
    id: '3',
    reportType: 'lost',
    petName: 'Coco',
    petType: 'Cat',
    breed: 'Siamese',
    location: 'West End, Chicago',
    reporterName: 'Daniel White',
    contactInfo: 'daniel@example.com, (555) 345-6789',
    reportedDate: '2025-04-17',
    description: 'Cream colored Siamese cat with blue eyes, wearing a red collar with bell.',
    status: 'matched'
  },
  {
    id: '4',
    reportType: 'found',
    petName: 'Unknown',
    petType: 'Dog',
    breed: 'Beagle',
    location: 'Riverside Park, Miami',
    reporterName: 'Jennifer Garcia',
    contactInfo: 'jennifer@example.com, (555) 456-7890',
    reportedDate: '2025-04-18',
    description: 'Small beagle, brown and white, wearing a torn green collar, no tags.',
    status: 'closed'
  }
];

interface LostFoundReport {
  id: string;
  reportType: 'lost' | 'found';
  petName: string;
  petType: string;
  breed: string;
  location: string;
  reporterName: string;
  contactInfo: string;
  reportedDate: string;
  description: string;
  status: 'open' | 'matched' | 'closed';
}

const LostFoundReports = () => {
  const [reports, setReports] = useState<LostFoundReport[]>(mockReports);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedReport, setSelectedReport] = useState<LostFoundReport | null>(null);
  const [reportTypeFilter, setReportTypeFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  
  // Filter reports based on search term, report type, and status
  const filteredReports = reports.filter(report => {
    const matchesSearch = 
      report.petName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesReportType = reportTypeFilter === 'all' || report.reportType === reportTypeFilter;
    const matchesStatus = statusFilter === 'all' || report.status === statusFilter;
    
    return matchesSearch && matchesReportType && matchesStatus;
  });
  
  const handleMarkAsMatched = (id: string) => {
    setReports(reports.map(report => 
      report.id === id ? { ...report, status: 'matched' } : report
    ));
    
    toast({
      title: "Report Marked as Matched",
      description: "The lost and found report has been marked as matched."
    });
  };
  
  const handleMarkAsClosed = (id: string) => {
    setReports(reports.map(report => 
      report.id === id ? { ...report, status: 'closed' } : report
    ));
    
    toast({
      title: "Report Marked as Closed",
      description: "The lost and found report has been closed."
    });
  };
  
  const handleView = (report: LostFoundReport) => {
    setSelectedReport(report);
  };
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex flex-wrap gap-2">
          <Select
            value={reportTypeFilter}
            onValueChange={setReportTypeFilter}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Report Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="lost">Lost</SelectItem>
              <SelectItem value="found">Found</SelectItem>
            </SelectContent>
          </Select>
          
          <Select
            value={statusFilter}
            onValueChange={setStatusFilter}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="matched">Matched</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search reports..." 
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
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Pet</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Reporter</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredReports.length > 0 ? (
              filteredReports.map(report => (
                <TableRow key={report.id}>
                  <TableCell>{report.reportedDate}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      report.reportType === 'lost' ? 'bg-orange-100 text-orange-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {report.reportType.charAt(0).toUpperCase() + report.reportType.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell>
                    {report.petName !== 'Unknown' ? report.petName : 'Unnamed'} 
                    <span className="text-gray-500 text-xs block">
                      {report.petType}, {report.breed}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-xs">{report.location}</span>
                  </TableCell>
                  <TableCell>{report.reporterName}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      report.status === 'open' ? 'bg-yellow-100 text-yellow-800' :
                      report.status === 'matched' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleView(report)}
                      >
                        <FileText className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-6 text-gray-500">
                  No lost and found reports found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      {/* Detail View */}
      {selectedReport && (
        <Card className="mt-6">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">
                {selectedReport.reportType === 'lost' ? 'Lost' : 'Found'} Pet Report Details
              </h3>
              <Button variant="outline" size="sm" onClick={() => setSelectedReport(null)}>
                Close
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-500 mb-2">Pet Information</h4>
                <p><strong>Name:</strong> {selectedReport.petName !== 'Unknown' ? selectedReport.petName : 'Not provided'}</p>
                <p><strong>Type:</strong> {selectedReport.petType}</p>
                <p><strong>Breed:</strong> {selectedReport.breed}</p>
                <p><strong>Description:</strong> {selectedReport.description}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-500 mb-2">Report Information</h4>
                <p><strong>Reporter:</strong> {selectedReport.reporterName}</p>
                <p><strong>Contact:</strong> {selectedReport.contactInfo}</p>
                <p><strong>Location:</strong> {selectedReport.location}</p>
                <p><strong>Date Reported:</strong> {selectedReport.reportedDate}</p>
                <p><strong>Status:</strong> {selectedReport.status.charAt(0).toUpperCase() + selectedReport.status.slice(1)}</p>
              </div>
              
              {selectedReport.status === 'open' && (
                <div className="md:col-span-2">
                  <div className="mt-4 flex gap-2">
                    <Button onClick={() => handleMarkAsMatched(selectedReport.id)}>
                      Mark as Matched
                    </Button>
                    <Button variant="outline" onClick={() => handleMarkAsClosed(selectedReport.id)}>
                      Close Report
                    </Button>
                  </div>
                </div>
              )}
              
              {selectedReport.status === 'matched' && (
                <div className="md:col-span-2">
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" onClick={() => handleMarkAsClosed(selectedReport.id)}>
                      Close Report
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default LostFoundReports;
