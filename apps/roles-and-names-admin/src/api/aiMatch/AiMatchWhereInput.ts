import { DecimalFilter } from "../../util/DecimalFilter";
import { StringFilter } from "../../util/StringFilter";
import { LostAndFoundReportWhereUniqueInput } from "../lostAndFoundReport/LostAndFoundReportWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { PetWhereUniqueInput } from "../pet/PetWhereUniqueInput";

export type AiMatchWhereInput = {
  confidenceScore?: DecimalFilter;
  id?: StringFilter;
  lostReport?: LostAndFoundReportWhereUniqueInput;
  matchedOn?: DateTimeFilter;
  matchedPet?: PetWhereUniqueInput;
};
