import { SortOrder } from "../../util/SortOrder";

export type PetOrderByInput = {
  age?: SortOrder;
  aiMatchesId?: SortOrder;
  breed?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  gender?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  ownerId?: SortOrder;
  status?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
