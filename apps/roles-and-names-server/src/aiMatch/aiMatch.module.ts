import { Module } from "@nestjs/common";
import { AiMatchModuleBase } from "./base/aiMatch.module.base";
import { AiMatchService } from "./aiMatch.service";
import { AiMatchController } from "./aiMatch.controller";
import { AiMatchResolver } from "./aiMatch.resolver";

@Module({
  imports: [AiMatchModuleBase],
  controllers: [AiMatchController],
  providers: [AiMatchService, AiMatchResolver],
  exports: [AiMatchService],
})
export class AiMatchModule {}
