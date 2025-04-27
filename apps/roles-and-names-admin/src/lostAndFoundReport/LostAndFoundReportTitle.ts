import { LostAndFoundReport as TLostAndFoundReport } from "../api/lostAndFoundReport/LostAndFoundReport";

export const LOSTANDFOUNDREPORT_TITLE_FIELD = "petName";

export const LostAndFoundReportTitle = (
  record: TLostAndFoundReport
): string => {
  return record.petName?.toString() || String(record.id);
};
