import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PetService } from "./pet.service";
import { PetControllerBase } from "./base/pet.controller.base";

@swagger.ApiTags("pets")
@common.Controller("pets")
export class PetController extends PetControllerBase {
  constructor(protected readonly service: PetService) {
    super(service);
  }
}
