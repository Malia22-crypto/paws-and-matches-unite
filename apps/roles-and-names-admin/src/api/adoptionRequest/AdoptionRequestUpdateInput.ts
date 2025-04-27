import { UserUpdateManyWithoutAdoptionRequestsInput } from "./UserUpdateManyWithoutAdoptionRequestsInput";
import { PetWhereUniqueInput } from "../pet/PetWhereUniqueInput";

export type AdoptionRequestUpdateInput = {
  adopter?: UserUpdateManyWithoutAdoptionRequestsInput;
  message?: string | null;
  pet?: PetWhereUniqueInput;
  requestedOn?: Date | null;
  status?: "Pending" | "Approved" | "Rejected" | null;
};
