import { UserCreateNestedManyWithoutAdoptionRequestsInput } from "./UserCreateNestedManyWithoutAdoptionRequestsInput";
import { PetWhereUniqueInput } from "../pet/PetWhereUniqueInput";

export type AdoptionRequestCreateInput = {
  adopter?: UserCreateNestedManyWithoutAdoptionRequestsInput;
  message?: string | null;
  pet: PetWhereUniqueInput;
  requestedOn?: Date | null;
  status?: "Pending" | "Approved" | "Rejected" | null;
};
