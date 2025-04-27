import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AiMatchServiceBase } from "./base/aiMatch.service.base";

@Injectable()
export class AiMatchService extends AiMatchServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
