import { AdoptionRequestWhereUniqueInput } from "../adoptionRequest/AdoptionRequestWhereUniqueInput";
import { LostAndFoundReportWhereUniqueInput } from "../lostAndFoundReport/LostAndFoundReportWhereUniqueInput";
import { PetWhereUniqueInput } from "../pet/PetWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  adoptionRequests?: AdoptionRequestWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lostAndFoundReports?: LostAndFoundReportWhereUniqueInput | null;
  password: string;
  pets?: PetWhereUniqueInput | null;
  phonenumber?: string | null;
  profilePicture?: InputJsonValue;
  roles: "User" | "Admin";
  username: string;
};
