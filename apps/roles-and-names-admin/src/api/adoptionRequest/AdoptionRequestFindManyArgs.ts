import { AdoptionRequestWhereInput } from "./AdoptionRequestWhereInput";
import { AdoptionRequestOrderByInput } from "./AdoptionRequestOrderByInput";

export type AdoptionRequestFindManyArgs = {
  where?: AdoptionRequestWhereInput;
  orderBy?: Array<AdoptionRequestOrderByInput>;
  skip?: number;
  take?: number;
};
