import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdoptionRequestService } from "./adoptionRequest.service";
import { AdoptionRequestControllerBase } from "./base/adoptionRequest.controller.base";

@swagger.ApiTags("adoptionRequests")
@common.Controller("adoptionRequests")
export class AdoptionRequestController extends AdoptionRequestControllerBase {
  constructor(protected readonly service: AdoptionRequestService) {
    super(service);
  }
}
