import { SortOrder } from "../../util/SortOrder";

export type LostAndFoundReportOrderByInput = {
  aiMatchesId?: SortOrder;
  contactInfo?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  location?: SortOrder;
  petName?: SortOrder;
  petType?: SortOrder;
  reportType?: SortOrder;
  reportedById?: SortOrder;
  updatedAt?: SortOrder;
};
