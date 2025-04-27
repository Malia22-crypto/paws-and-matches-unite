import { Decimal } from "decimal.js";
import { LostAndFoundReportWhereUniqueInput } from "../lostAndFoundReport/LostAndFoundReportWhereUniqueInput";
import { PetWhereUniqueInput } from "../pet/PetWhereUniqueInput";

export type AiMatchCreateInput = {
  confidenceScore: Decimal;
  lostReport: LostAndFoundReportWhereUniqueInput;
  matchedOn: Date;
  matchedPet: PetWhereUniqueInput | null;
};
