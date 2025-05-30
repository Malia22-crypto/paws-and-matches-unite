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
import { PetService } from "../pet.service";
import { PetCreateInput } from "./PetCreateInput";
import { Pet } from "./Pet";
import { PetFindManyArgs } from "./PetFindManyArgs";
import { PetWhereUniqueInput } from "./PetWhereUniqueInput";
import { PetUpdateInput } from "./PetUpdateInput";
import { AdoptionRequestFindManyArgs } from "../../adoptionRequest/base/AdoptionRequestFindManyArgs";
import { AdoptionRequest } from "../../adoptionRequest/base/AdoptionRequest";
import { AdoptionRequestWhereUniqueInput } from "../../adoptionRequest/base/AdoptionRequestWhereUniqueInput";

export class PetControllerBase {
  constructor(protected readonly service: PetService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Pet })
  async createPet(@common.Body() data: PetCreateInput): Promise<Pet> {
    return await this.service.createPet({
      data: {
        ...data,

        aiMatches: data.aiMatches
          ? {
              connect: data.aiMatches,
            }
          : undefined,

        owner: data.owner
          ? {
              connect: data.owner,
            }
          : undefined,
      },
      select: {
        age: true,

        aiMatches: {
          select: {
            id: true,
          },
        },

        breed: true,
        createdAt: true,
        description: true,
        gender: true,
        id: true,
        imageUrl: true,
        location: true,
        name: true,

        owner: {
          select: {
            id: true,
          },
        },

        status: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Pet] })
  @ApiNestedQuery(PetFindManyArgs)
  async pets(@common.Req() request: Request): Promise<Pet[]> {
    const args = plainToClass(PetFindManyArgs, request.query);
    return this.service.pets({
      ...args,
      select: {
        age: true,

        aiMatches: {
          select: {
            id: true,
          },
        },

        breed: true,
        createdAt: true,
        description: true,
        gender: true,
        id: true,
        imageUrl: true,
        location: true,
        name: true,

        owner: {
          select: {
            id: true,
          },
        },

        status: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Pet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async pet(@common.Param() params: PetWhereUniqueInput): Promise<Pet | null> {
    const result = await this.service.pet({
      where: params,
      select: {
        age: true,

        aiMatches: {
          select: {
            id: true,
          },
        },

        breed: true,
        createdAt: true,
        description: true,
        gender: true,
        id: true,
        imageUrl: true,
        location: true,
        name: true,

        owner: {
          select: {
            id: true,
          },
        },

        status: true,
        typeField: true,
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
  @swagger.ApiOkResponse({ type: Pet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePet(
    @common.Param() params: PetWhereUniqueInput,
    @common.Body() data: PetUpdateInput
  ): Promise<Pet | null> {
    try {
      return await this.service.updatePet({
        where: params,
        data: {
          ...data,

          aiMatches: data.aiMatches
            ? {
                connect: data.aiMatches,
              }
            : undefined,

          owner: data.owner
            ? {
                connect: data.owner,
              }
            : undefined,
        },
        select: {
          age: true,

          aiMatches: {
            select: {
              id: true,
            },
          },

          breed: true,
          createdAt: true,
          description: true,
          gender: true,
          id: true,
          imageUrl: true,
          location: true,
          name: true,

          owner: {
            select: {
              id: true,
            },
          },

          status: true,
          typeField: true,
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
  @swagger.ApiOkResponse({ type: Pet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePet(
    @common.Param() params: PetWhereUniqueInput
  ): Promise<Pet | null> {
    try {
      return await this.service.deletePet({
        where: params,
        select: {
          age: true,

          aiMatches: {
            select: {
              id: true,
            },
          },

          breed: true,
          createdAt: true,
          description: true,
          gender: true,
          id: true,
          imageUrl: true,
          location: true,
          name: true,

          owner: {
            select: {
              id: true,
            },
          },

          status: true,
          typeField: true,
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

  @common.Get("/:id/adoptionRequests")
  @ApiNestedQuery(AdoptionRequestFindManyArgs)
  async findAdoptionRequests(
    @common.Req() request: Request,
    @common.Param() params: PetWhereUniqueInput
  ): Promise<AdoptionRequest[]> {
    const query = plainToClass(AdoptionRequestFindManyArgs, request.query);
    const results = await this.service.findAdoptionRequests(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        message: true,

        pet: {
          select: {
            id: true,
          },
        },

        requestedOn: true,
        status: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/adoptionRequests")
  async connectAdoptionRequests(
    @common.Param() params: PetWhereUniqueInput,
    @common.Body() body: AdoptionRequestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      adoptionRequests: {
        connect: body,
      },
    };
    await this.service.updatePet({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/adoptionRequests")
  async updateAdoptionRequests(
    @common.Param() params: PetWhereUniqueInput,
    @common.Body() body: AdoptionRequestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      adoptionRequests: {
        set: body,
      },
    };
    await this.service.updatePet({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/adoptionRequests")
  async disconnectAdoptionRequests(
    @common.Param() params: PetWhereUniqueInput,
    @common.Body() body: AdoptionRequestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      adoptionRequests: {
        disconnect: body,
      },
    };
    await this.service.updatePet({
      where: params,
      data,
      select: { id: true },
    });
  }
}
