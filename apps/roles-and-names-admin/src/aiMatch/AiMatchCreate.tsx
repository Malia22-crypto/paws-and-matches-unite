import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { LostAndFoundReportTitle } from "../lostAndFoundReport/LostAndFoundReportTitle";
import { PetTitle } from "../pet/PetTitle";

export const AiMatchCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="confidenceScore" source="confidenceScore" />
        <ReferenceInput
          source="lostReport.id"
          reference="LostAndFoundReport"
          label="lostReport"
        >
          <SelectInput optionText={LostAndFoundReportTitle} />
        </ReferenceInput>
        <DateTimeInput label="matchedOn" source="matchedOn" />
        <ReferenceInput
          source="matchedPet.id"
          reference="Pet"
          label="matchedPet"
        >
          <SelectInput optionText={PetTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
