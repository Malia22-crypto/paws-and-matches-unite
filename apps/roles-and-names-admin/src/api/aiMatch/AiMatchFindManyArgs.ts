import { AiMatchWhereInput } from "./AiMatchWhereInput";
import { AiMatchOrderByInput } from "./AiMatchOrderByInput";

export type AiMatchFindManyArgs = {
  where?: AiMatchWhereInput;
  orderBy?: Array<AiMatchOrderByInput>;
  skip?: number;
  take?: number;
};
