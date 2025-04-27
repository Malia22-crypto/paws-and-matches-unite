import { SortOrder } from "../../util/SortOrder";

export type AiMatchOrderByInput = {
  confidenceScore?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  lostReportId?: SortOrder;
  matchedOn?: SortOrder;
  matchedPetId?: SortOrder;
  updatedAt?: SortOrder;
};
