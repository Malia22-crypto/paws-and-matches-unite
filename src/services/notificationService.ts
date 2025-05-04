
import { toast } from '@/components/ui/use-toast';

// In a real application, this would connect to a backend API
// that would handle the actual sending of emails
export const sendEmailNotification = async (
  email: string, 
  subject: string, 
  message: string
): Promise<boolean> => {
  // Simulating an API call to send an email
  console.log(`Sending email to: ${email}`);
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${message}`);
  
  // In a real application, you would make an API call to your backend:
  // const response = await fetch('/api/send-email', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ email, subject, message })
  // });
  
  // For demo purposes, we'll just simulate a successful response
  return true;
};

// Helper functions for specific notification types

export const sendMatchFoundNotification = async (
  email: string,
  petName: string,
  matchDetails: string
): Promise<boolean> => {
  const subject = `Match Found: ${petName}`;
  const message = `Great news! We've found a match for your lost pet report: ${petName}.\n\nMatch Details:\n${matchDetails}\n\nPlease log in to your account to view more information.`;
  
  try {
    const result = await sendEmailNotification(email, subject, message);
    if (result) {
      toast({
        title: "Notification Sent",
        description: `Match notification email sent to ${email}`,
      });
    }
    return result;
  } catch (error) {
    console.error("Failed to send match notification:", error);
    toast({
      title: "Notification Failed",
      description: "Failed to send match notification email",
      variant: "destructive",
    });
    return false;
  }
};

export const sendAdoptionApprovedNotification = async (
  email: string,
  applicantName: string,
  petName: string
): Promise<boolean> => {
  const subject = `Adoption Approved: ${petName}`;
  const message = `Congratulations, ${applicantName}! Your adoption application for ${petName} has been approved.\n\nPlease contact our shelter within the next 7 days to arrange a time to pick up your new companion.\n\nThank you for choosing to adopt!`;
  
  try {
    const result = await sendEmailNotification(email, subject, message);
    if (result) {
      toast({
        title: "Notification Sent",
        description: `Adoption approval email sent to ${email}`,
      });
    }
    return result;
  } catch (error) {
    console.error("Failed to send adoption approval notification:", error);
    toast({
      title: "Notification Failed",
      description: "Failed to send adoption approval email",
      variant: "destructive",
    });
    return false;
  }
};

export const sendRehomingApprovedNotification = async (
  email: string,
  ownerName: string,
  petName: string
): Promise<boolean> => {
  const subject = `Rehoming Request Approved: ${petName}`;
  const message = `Hello ${ownerName},\n\nYour rehoming request for ${petName} has been approved. We will be adding your pet to our available pets list.\n\nOur staff will contact you shortly to arrange the next steps in the rehoming process.\n\nThank you for trusting us with finding a new home for ${petName}.`;
  
  try {
    const result = await sendEmailNotification(email, subject, message);
    if (result) {
      toast({
        title: "Notification Sent",
        description: `Rehoming approval email sent to ${email}`,
      });
    }
    return result;
  } catch (error) {
    console.error("Failed to send rehoming approval notification:", error);
    toast({
      title: "Notification Failed",
      description: "Failed to send rehoming approval email",
      variant: "destructive",
    });
    return false;
  }
};
