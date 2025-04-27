import { LostAndFoundReportWhereInput } from "./LostAndFoundReportWhereInput";
import { LostAndFoundReportOrderByInput } from "./LostAndFoundReportOrderByInput";

export type LostAndFoundReportFindManyArgs = {
  where?: LostAndFoundReportWhereInput;
  orderBy?: Array<LostAndFoundReportOrderByInput>;
  skip?: number;
  take?: number;
};
