/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Public } from "../../decorators/public.decorator";
import { User } from "./User";
import { UserCountArgs } from "./UserCountArgs";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserFindUniqueArgs } from "./UserFindUniqueArgs";
import { CreateUserArgs } from "./CreateUserArgs";
import { UpdateUserArgs } from "./UpdateUserArgs";
import { DeleteUserArgs } from "./DeleteUserArgs";
import { AdoptionRequest } from "../../adoptionRequest/base/AdoptionRequest";
import { LostAndFoundReport } from "../../lostAndFoundReport/base/LostAndFoundReport";
import { Pet } from "../../pet/base/Pet";
import { UserService } from "../user.service";
@graphql.Resolver(() => User)
export class UserResolverBase {
  constructor(protected readonly service: UserService) {}

  async _usersMeta(
    @graphql.Args() args: UserCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @Public()
  @graphql.Query(() => [User])
  async users(@graphql.Args() args: UserFindManyArgs): Promise<User[]> {
    return this.service.users(args);
  }

  @graphql.Query(() => User, { nullable: true })
  async user(@graphql.Args() args: UserFindUniqueArgs): Promise<User | null> {
    const result = await this.service.user(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => User)
  async createUser(@graphql.Args() args: CreateUserArgs): Promise<User> {
    return await this.service.createUser({
      ...args,
      data: {
        ...args.data,

        adoptionRequests: args.data.adoptionRequests
          ? {
              connect: args.data.adoptionRequests,
            }
          : undefined,

        lostAndFoundReports: args.data.lostAndFoundReports
          ? {
              connect: args.data.lostAndFoundReports,
            }
          : undefined,

        pets: args.data.pets
          ? {
              connect: args.data.pets,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => User)
  async updateUser(@graphql.Args() args: UpdateUserArgs): Promise<User | null> {
    try {
      return await this.service.updateUser({
        ...args,
        data: {
          ...args.data,

          adoptionRequests: args.data.adoptionRequests
            ? {
                connect: args.data.adoptionRequests,
              }
            : undefined,

          lostAndFoundReports: args.data.lostAndFoundReports
            ? {
                connect: args.data.lostAndFoundReports,
              }
            : undefined,

          pets: args.data.pets
            ? {
                connect: args.data.pets,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => User)
  async deleteUser(@graphql.Args() args: DeleteUserArgs): Promise<User | null> {
    try {
      return await this.service.deleteUser(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => AdoptionRequest, {
    nullable: true,
    name: "adoptionRequests",
  })
  async getAdoptionRequests(
    @graphql.Parent() parent: User
  ): Promise<AdoptionRequest | null> {
    const result = await this.service.getAdoptionRequests(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => LostAndFoundReport, {
    nullable: true,
    name: "lostAndFoundReports",
  })
  async getLostAndFoundReports(
    @graphql.Parent() parent: User
  ): Promise<LostAndFoundReport | null> {
    const result = await this.service.getLostAndFoundReports(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Pet, {
    nullable: true,
    name: "pets",
  })
  async getPets(@graphql.Parent() parent: User): Promise<Pet | null> {
    const result = await this.service.getPets(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
