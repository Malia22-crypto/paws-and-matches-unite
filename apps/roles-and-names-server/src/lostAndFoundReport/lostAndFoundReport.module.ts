import { Module } from "@nestjs/common";
import { LostAndFoundReportModuleBase } from "./base/lostAndFoundReport.module.base";
import { LostAndFoundReportService } from "./lostAndFoundReport.service";
import { LostAndFoundReportController } from "./lostAndFoundReport.controller";
import { LostAndFoundReportResolver } from "./lostAndFoundReport.resolver";

@Module({
  imports: [LostAndFoundReportModuleBase],
  controllers: [LostAndFoundReportController],
  providers: [LostAndFoundReportService, LostAndFoundReportResolver],
  exports: [LostAndFoundReportService],
})
export class LostAndFoundReportModule {}
