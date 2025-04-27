import * as graphql from "@nestjs/graphql";
import { AdoptionRequestResolverBase } from "./base/adoptionRequest.resolver.base";
import { AdoptionRequest } from "./base/AdoptionRequest";
import { AdoptionRequestService } from "./adoptionRequest.service";

@graphql.Resolver(() => AdoptionRequest)
export class AdoptionRequestResolver extends AdoptionRequestResolverBase {
  constructor(protected readonly service: AdoptionRequestService) {
    super(service);
  }
}
