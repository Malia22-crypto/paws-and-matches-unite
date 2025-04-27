import { User } from "../user/User";
import { Pet } from "../pet/Pet";

export type AdoptionRequest = {
  adopter?: Array<User>;
  createdAt: Date;
  id: string;
  message: string | null;
  pet?: Pet;
  requestedOn: Date | null;
  status?: "Pending" | "Approved" | "Rejected" | null;
  updatedAt: Date;
};
