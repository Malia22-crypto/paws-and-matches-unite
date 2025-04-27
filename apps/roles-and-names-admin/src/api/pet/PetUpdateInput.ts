import { AdoptionRequestUpdateManyWithoutPetsInput } from "./AdoptionRequestUpdateManyWithoutPetsInput";
import { AiMatchWhereUniqueInput } from "../aiMatch/AiMatchWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PetUpdateInput = {
  adoptionRequests?: AdoptionRequestUpdateManyWithoutPetsInput;
  age?: number | null;
  aiMatches?: AiMatchWhereUniqueInput | null;
  breed?: string | null;
  description?: string | null;
  gender?: "Male" | "Female" | "Unknown" | null;
  imageUrl?: InputJsonValue;
  location?: string | null;
  name?: string | null;
  owner?: UserWhereUniqueInput | null;
  status?: "Available" | "Adopted" | "Lost" | "Found" | null;
  typeField?: "Cat" | "Dog" | null;
};
