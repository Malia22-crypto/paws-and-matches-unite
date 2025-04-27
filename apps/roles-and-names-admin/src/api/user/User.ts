import { AdoptionRequest } from "../adoptionRequest/AdoptionRequest";
import { LostAndFoundReport } from "../lostAndFoundReport/LostAndFoundReport";
import { Pet } from "../pet/Pet";
import { JsonValue } from "type-fest";

export type User = {
  adoptionRequests?: AdoptionRequest | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lostAndFoundReports?: LostAndFoundReport | null;
  pets?: Pet | null;
  phonenumber: string | null;
  profilePicture: JsonValue;
  roles?: "User" | "Admin";
  updatedAt: Date;
  username: string;
};
