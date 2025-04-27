import { Decimal } from "decimal.js";
import { LostAndFoundReport } from "../lostAndFoundReport/LostAndFoundReport";
import { Pet } from "../pet/Pet";

export type AiMatch = {
  confidenceScore: Decimal;
  createdAt: Date;
  id: string;
  lostReport?: LostAndFoundReport;
  matchedOn: Date;
  matchedPet?: Pet | null;
  updatedAt: Date;
};
