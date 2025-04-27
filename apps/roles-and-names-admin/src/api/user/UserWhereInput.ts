import { AdoptionRequestWhereUniqueInput } from "../adoptionRequest/AdoptionRequestWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LostAndFoundReportWhereUniqueInput } from "../lostAndFoundReport/LostAndFoundReportWhereUniqueInput";
import { PetWhereUniqueInput } from "../pet/PetWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type UserWhereInput = {
  adoptionRequests?: AdoptionRequestWhereUniqueInput;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lostAndFoundReports?: LostAndFoundReportWhereUniqueInput;
  pets?: PetWhereUniqueInput;
  phonenumber?: StringNullableFilter;
  profilePicture?: JsonFilter;
  username?: StringFilter;
};
