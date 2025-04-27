import { Module } from "@nestjs/common";
import { AdoptionRequestModuleBase } from "./base/adoptionRequest.module.base";
import { AdoptionRequestService } from "./adoptionRequest.service";
import { AdoptionRequestController } from "./adoptionRequest.controller";
import { AdoptionRequestResolver } from "./adoptionRequest.resolver";

@Module({
  imports: [AdoptionRequestModuleBase],
  controllers: [AdoptionRequestController],
  providers: [AdoptionRequestService, AdoptionRequestResolver],
  exports: [AdoptionRequestService],
})
export class AdoptionRequestModule {}
