
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { toast } from '@/components/ui/use-toast';
import { LostFoundReport } from '@/types/admin';
import { sendMatchFoundNotification } from '@/services/notificationService';

interface LostFoundMatchProps {
  report: LostFoundReport | null;
  onClose: () => void;
  open: boolean;
}

const LostFoundMatch: React.FC<LostFoundMatchProps> = ({ report, onClose, open }) => {
  const [matchDetails, setMatchDetails] = useState('');
  const [isSending, setIsSending] = useState(false);
  
  if (!report) return null;
  
  const handleSendNotification = async () => {
    if (!matchDetails.trim()) {
      toast({
        title: "Error",
        description: "Please provide match details before sending the notification.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSending(true);
    
    try {
      await sendMatchFoundNotification(
        report.contactInfo,
        report.petName || "your pet",
        matchDetails
      );
      
      toast({
        title: "Match Notification Sent",
        description: "The reporter has been notified about the potential match."
      });
      
      // Reset and close
      setMatchDetails('');
      onClose();
    } catch (error) {
      console.error("Failed to send match notification:", error);
      toast({
        title: "Notification Failed",
        description: "There was an issue sending the match notification.",
        variant: "destructive"
      });
    } finally {
      setIsSending(false);
    }
  };
  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Notify About Potential Match</DialogTitle>
          <DialogDescription>
            Send a notification to {report.reporterName} about a potential match for their {report.reportType === 'lost' ? 'lost' : 'found'} pet.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Report Details</h4>
            <div className="text-sm">
              <p><span className="font-medium">Type:</span> {report.reportType === 'lost' ? 'Lost pet' : 'Found pet'}</p>
              <p><span className="font-medium">Pet:</span> {report.petName || 'Not specified'} ({report.petType})</p>
              <p><span className="font-medium">Reporter:</span> {report.reporterName}</p>
              <p><span className="font-medium">Contact:</span> {report.contactInfo}</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2">Match Details</h4>
            <Textarea
              value={matchDetails}
              onChange={(e) => setMatchDetails(e.target.value)}
              placeholder="Provide details about the potential match..."
              className="h-24"
            />
          </div>
        </div>
        
        <DialogFooter className="sm:justify-between">
          <DialogClose asChild>
            <Button type="button" variant="secondary">Cancel</Button>
          </DialogClose>
          <Button 
            onClick={handleSendNotification} 
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Notification"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LostFoundMatch;
