/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  Max,
  IsOptional,
  ValidateNested,
  IsDate,
} from "class-validator";
import { Decimal } from "decimal.js";
import { LostAndFoundReportWhereUniqueInput } from "../../lostAndFoundReport/base/LostAndFoundReportWhereUniqueInput";
import { Type } from "class-transformer";
import { PetWhereUniqueInput } from "../../pet/base/PetWhereUniqueInput";

@InputType()
class AiMatchUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  confidenceScore?: Decimal;

  @ApiProperty({
    required: false,
    type: () => LostAndFoundReportWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LostAndFoundReportWhereUniqueInput)
  @IsOptional()
  @Field(() => LostAndFoundReportWhereUniqueInput, {
    nullable: true,
  })
  lostReport?: LostAndFoundReportWhereUniqueInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  matchedOn?: Date;

  @ApiProperty({
    required: false,
    type: () => PetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PetWhereUniqueInput)
  @IsOptional()
  @Field(() => PetWhereUniqueInput, {
    nullable: true,
  })
  matchedPet?: PetWhereUniqueInput | null;
}

export { AiMatchUpdateInput as AiMatchUpdateInput };
