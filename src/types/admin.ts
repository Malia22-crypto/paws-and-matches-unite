
export interface AdoptionRequest {
  id: string;
  petName: string;
  petType: string;
  applicantName: string;
  email: string;
  phone: string;
  submittedDate: string;
  status: "pending" | "approved" | "rejected";
}

export interface RehomingRequest {
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
  status: "pending" | "approved" | "rejected";
}

export interface LostFoundReport {
  id: string;
  reportType: "lost" | "found";
  petName: string;
  petType: string;
  breed: string;
  location: string;
  reporterName: string;
  contactInfo: string;
  reportedDate: string;
  description: string;
  status: "pending" | "resolved" | "closed";
}
