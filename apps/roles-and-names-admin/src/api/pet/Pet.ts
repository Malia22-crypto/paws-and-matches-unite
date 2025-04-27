import { AdoptionRequest } from "../adoptionRequest/AdoptionRequest";
import { AiMatch } from "../aiMatch/AiMatch";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Pet = {
  adoptionRequests?: Array<AdoptionRequest>;
  age: number | null;
  aiMatches?: AiMatch | null;
  breed: string | null;
  createdAt: Date;
  description: string | null;
  gender?: "Male" | "Female" | "Unknown" | null;
  id: string;
  imageUrl: JsonValue;
  location: string | null;
  name: string | null;
  owner?: User | null;
  status?: "Available" | "Adopted" | "Lost" | "Found" | null;
  typeField?: "Cat" | "Dog" | null;
  updatedAt: Date;
};
