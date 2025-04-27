import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdoptionRequestServiceBase } from "./base/adoptionRequest.service.base";

@Injectable()
export class AdoptionRequestService extends AdoptionRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
