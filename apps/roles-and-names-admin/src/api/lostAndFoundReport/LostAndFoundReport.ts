import { AiMatch } from "../aiMatch/AiMatch";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type LostAndFoundReport = {
  aiMatches?: AiMatch | null;
  contactInfo: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  imageUrl: JsonValue;
  location: string | null;
  petName: string | null;
  petType?: "Dog" | "Cat" | null;
  reportType?: "Lost" | "Found" | null;
  reportedBy?: User | null;
  updatedAt: Date;
};
