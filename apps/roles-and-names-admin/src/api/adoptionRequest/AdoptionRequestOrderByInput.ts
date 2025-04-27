import { SortOrder } from "../../util/SortOrder";

export type AdoptionRequestOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  petId?: SortOrder;
  requestedOn?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
