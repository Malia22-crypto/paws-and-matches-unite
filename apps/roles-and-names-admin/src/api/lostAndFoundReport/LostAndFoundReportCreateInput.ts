import { AiMatchWhereUniqueInput } from "../aiMatch/AiMatchWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LostAndFoundReportCreateInput = {
  aiMatches?: AiMatchWhereUniqueInput | null;
  contactInfo?: string | null;
  description?: string | null;
  imageUrl?: InputJsonValue;
  location?: string | null;
  petName?: string | null;
  petType?: "Dog" | "Cat" | null;
  reportType?: "Lost" | "Found" | null;
  reportedBy?: UserWhereUniqueInput | null;
};
