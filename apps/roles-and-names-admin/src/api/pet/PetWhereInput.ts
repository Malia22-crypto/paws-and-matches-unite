import { AdoptionRequestListRelationFilter } from "../adoptionRequest/AdoptionRequestListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { AiMatchWhereUniqueInput } from "../aiMatch/AiMatchWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PetWhereInput = {
  adoptionRequests?: AdoptionRequestListRelationFilter;
  age?: IntNullableFilter;
  aiMatches?: AiMatchWhereUniqueInput;
  breed?: StringNullableFilter;
  description?: StringNullableFilter;
  gender?: "Male" | "Female" | "Unknown";
  id?: StringFilter;
  imageUrl?: JsonFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: UserWhereUniqueInput;
  status?: "Available" | "Adopted" | "Lost" | "Found";
  typeField?: "Cat" | "Dog";
};
