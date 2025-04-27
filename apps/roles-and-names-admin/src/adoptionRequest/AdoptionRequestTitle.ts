import { AdoptionRequest as TAdoptionRequest } from "../api/adoptionRequest/AdoptionRequest";

export const ADOPTIONREQUEST_TITLE_FIELD = "id";

export const AdoptionRequestTitle = (record: TAdoptionRequest): string => {
  return record.id?.toString() || String(record.id);
};
