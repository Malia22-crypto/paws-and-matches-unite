import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LostAndFoundReportService } from "./lostAndFoundReport.service";
import { LostAndFoundReportControllerBase } from "./base/lostAndFoundReport.controller.base";

@swagger.ApiTags("lostAndFoundReports")
@common.Controller("lostAndFoundReports")
export class LostAndFoundReportController extends LostAndFoundReportControllerBase {
  constructor(protected readonly service: LostAndFoundReportService) {
    super(service);
  }
}
