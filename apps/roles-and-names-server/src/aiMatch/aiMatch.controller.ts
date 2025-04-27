import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AiMatchService } from "./aiMatch.service";
import { AiMatchControllerBase } from "./base/aiMatch.controller.base";

@swagger.ApiTags("aiMatches")
@common.Controller("aiMatches")
export class AiMatchController extends AiMatchControllerBase {
  constructor(protected readonly service: AiMatchService) {
    super(service);
  }
}
