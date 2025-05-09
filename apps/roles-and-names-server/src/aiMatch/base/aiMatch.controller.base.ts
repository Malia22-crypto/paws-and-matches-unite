/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AiMatchService } from "../aiMatch.service";
import { AiMatchCreateInput } from "./AiMatchCreateInput";
import { AiMatch } from "./AiMatch";
import { AiMatchFindManyArgs } from "./AiMatchFindManyArgs";
import { AiMatchWhereUniqueInput } from "./AiMatchWhereUniqueInput";
import { AiMatchUpdateInput } from "./AiMatchUpdateInput";

export class AiMatchControllerBase {
  constructor(protected readonly service: AiMatchService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AiMatch })
  async createAiMatch(
    @common.Body() data: AiMatchCreateInput
  ): Promise<AiMatch> {
    return await this.service.createAiMatch({
      data: {
        ...data,

        lostReport: {
          connect: data.lostReport,
        },

        matchedPet: {
          connect: data.matchedPet,
        },
      },
      select: {
        confidenceScore: true,
        createdAt: true,
        id: true,

        lostReport: {
          select: {
            id: true,
          },
        },

        matchedOn: true,

        matchedPet: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AiMatch] })
  @ApiNestedQuery(AiMatchFindManyArgs)
  async aiMatches(@common.Req() request: Request): Promise<AiMatch[]> {
    const args = plainToClass(AiMatchFindManyArgs, request.query);
    return this.service.aiMatches({
      ...args,
      select: {
        confidenceScore: true,
        createdAt: true,
        id: true,

        lostReport: {
          select: {
            id: true,
          },
        },

        matchedOn: true,

        matchedPet: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AiMatch })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async aiMatch(
    @common.Param() params: AiMatchWhereUniqueInput
  ): Promise<AiMatch | null> {
    const result = await this.service.aiMatch({
      where: params,
      select: {
        confidenceScore: true,
        createdAt: true,
        id: true,

        lostReport: {
          select: {
            id: true,
          },
        },

        matchedOn: true,

        matchedPet: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: AiMatch })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAiMatch(
    @common.Param() params: AiMatchWhereUniqueInput,
    @common.Body() data: AiMatchUpdateInput
  ): Promise<AiMatch | null> {
    try {
      return await this.service.updateAiMatch({
        where: params,
        data: {
          ...data,

          lostReport: {
            connect: data.lostReport,
          },

          matchedPet: {
            connect: data.matchedPet,
          },
        },
        select: {
          confidenceScore: true,
          createdAt: true,
          id: true,

          lostReport: {
            select: {
              id: true,
            },
          },

          matchedOn: true,

          matchedPet: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: AiMatch })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAiMatch(
    @common.Param() params: AiMatchWhereUniqueInput
  ): Promise<AiMatch | null> {
    try {
      return await this.service.deleteAiMatch({
        where: params,
        select: {
          confidenceScore: true,
          createdAt: true,
          id: true,

          lostReport: {
            select: {
              id: true,
            },
          },

          matchedOn: true,

          matchedPet: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
