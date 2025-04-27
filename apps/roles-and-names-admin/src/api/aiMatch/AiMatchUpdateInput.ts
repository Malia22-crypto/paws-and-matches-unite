import { Decimal } from "decimal.js";
import { LostAndFoundReportWhereUniqueInput } from "../lostAndFoundReport/LostAndFoundReportWhereUniqueInput";
import { PetWhereUniqueInput } from "../pet/PetWhereUniqueInput";

export type AiMatchUpdateInput = {
  confidenceScore?: Decimal;
  lostReport?: LostAndFoundReportWhereUniqueInput;
  matchedOn?: Date;
  matchedPet?: PetWhereUniqueInput | null;
};
