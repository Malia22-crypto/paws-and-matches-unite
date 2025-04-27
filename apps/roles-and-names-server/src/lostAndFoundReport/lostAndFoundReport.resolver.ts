import * as graphql from "@nestjs/graphql";
import { LostAndFoundReportResolverBase } from "./base/lostAndFoundReport.resolver.base";
import { LostAndFoundReport } from "./base/LostAndFoundReport";
import { LostAndFoundReportService } from "./lostAndFoundReport.service";

@graphql.Resolver(() => LostAndFoundReport)
export class LostAndFoundReportResolver extends LostAndFoundReportResolverBase {
  constructor(protected readonly service: LostAndFoundReportService) {
    super(service);
  }
}
