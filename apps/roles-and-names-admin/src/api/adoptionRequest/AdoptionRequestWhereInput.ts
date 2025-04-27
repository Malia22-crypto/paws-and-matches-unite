import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PetWhereUniqueInput } from "../pet/PetWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AdoptionRequestWhereInput = {
  adopter?: UserListRelationFilter;
  id?: StringFilter;
  message?: StringNullableFilter;
  pet?: PetWhereUniqueInput;
  requestedOn?: DateTimeNullableFilter;
  status?: "Pending" | "Approved" | "Rejected";
};
