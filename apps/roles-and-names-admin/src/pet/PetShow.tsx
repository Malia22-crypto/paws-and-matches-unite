import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PET_TITLE_FIELD } from "./PetTitle";
import { AIMATCH_TITLE_FIELD } from "../aiMatch/AiMatchTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Age" source="age" />
        <ReferenceField
          label="AIMatches"
          source="aimatch.id"
          reference="AiMatch"
        >
          <TextField source={AIMATCH_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Breed" source="breed" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="ImageURL" source="imageUrl" />
        <TextField label="Location" source="location" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Owner" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Status" source="status" />
        <TextField label="Type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AdoptionRequest"
          target="petId"
          label="adoptionRequests"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="message" source="message" />
            <ReferenceField label="pet" source="pet.id" reference="Pet">
              <TextField source={PET_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="requestedOn" source="requestedOn" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
