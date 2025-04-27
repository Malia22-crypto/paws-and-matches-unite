import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { LostAndFoundReportTitle } from "../lostAndFoundReport/LostAndFoundReportTitle";
import { PetTitle } from "../pet/PetTitle";

export const AiMatchEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
