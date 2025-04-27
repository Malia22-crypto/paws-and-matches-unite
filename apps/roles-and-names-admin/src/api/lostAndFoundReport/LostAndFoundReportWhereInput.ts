import { AiMatchWhereUniqueInput } from "../aiMatch/AiMatchWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LostAndFoundReportWhereInput = {
  aiMatches?: AiMatchWhereUniqueInput;
  contactInfo?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  imageUrl?: JsonFilter;
  location?: StringNullableFilter;
  petName?: StringNullableFilter;
  petType?: "Dog" | "Cat";
  reportType?: "Lost" | "Found";
  reportedBy?: UserWhereUniqueInput;
};
