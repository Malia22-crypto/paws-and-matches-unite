/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AdoptionRequestWhereInput } from "./AdoptionRequestWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AdoptionRequestListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AdoptionRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => AdoptionRequestWhereInput)
  @IsOptional()
  @Field(() => AdoptionRequestWhereInput, {
    nullable: true,
  })
  every?: AdoptionRequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => AdoptionRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => AdoptionRequestWhereInput)
  @IsOptional()
  @Field(() => AdoptionRequestWhereInput, {
    nullable: true,
  })
  some?: AdoptionRequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => AdoptionRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => AdoptionRequestWhereInput)
  @IsOptional()
  @Field(() => AdoptionRequestWhereInput, {
    nullable: true,
  })
  none?: AdoptionRequestWhereInput;
}
export { AdoptionRequestListRelationFilter as AdoptionRequestListRelationFilter };
