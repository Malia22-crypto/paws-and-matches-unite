import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { LOSTANDFOUNDREPORT_TITLE_FIELD } from "../lostAndFoundReport/LostAndFoundReportTitle";
import { PET_TITLE_FIELD } from "../pet/PetTitle";

export const AiMatchShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="confidenceScore" source="confidenceScore" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="lostReport"
          source="lostandfoundreport.id"
          reference="LostAndFoundReport"
        >
          <TextField source={LOSTANDFOUNDREPORT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="matchedOn" source="matchedOn" />
        <ReferenceField label="matchedPet" source="pet.id" reference="Pet">
          <TextField source={PET_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
