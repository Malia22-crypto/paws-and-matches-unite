import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LostAndFoundReportServiceBase } from "./base/lostAndFoundReport.service.base";

@Injectable()
export class LostAndFoundReportService extends LostAndFoundReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
