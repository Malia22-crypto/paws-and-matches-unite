import * as graphql from "@nestjs/graphql";
import { AiMatchResolverBase } from "./base/aiMatch.resolver.base";
import { AiMatch } from "./base/AiMatch";
import { AiMatchService } from "./aiMatch.service";

@graphql.Resolver(() => AiMatch)
export class AiMatchResolver extends AiMatchResolverBase {
  constructor(protected readonly service: AiMatchService) {
    super(service);
  }
}
