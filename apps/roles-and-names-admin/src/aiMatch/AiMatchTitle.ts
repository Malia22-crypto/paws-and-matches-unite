import { AiMatch as TAiMatch } from "../api/aiMatch/AiMatch";

export const AIMATCH_TITLE_FIELD = "id";

export const AiMatchTitle = (record: TAiMatch): string => {
  return record.id?.toString() || String(record.id);
};
