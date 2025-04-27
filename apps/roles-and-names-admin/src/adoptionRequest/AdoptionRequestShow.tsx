import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ADOPTIONREQUEST_TITLE_FIELD } from "./AdoptionRequestTitle";
import { LOSTANDFOUNDREPORT_TITLE_FIELD } from "../lostAndFoundReport/LostAndFoundReportTitle";
import { PET_TITLE_FIELD } from "../pet/PetTitle";

export const AdoptionRequestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="message" source="message" />
        <ReferenceField label="pet" source="pet.id" reference="Pet">
          <TextField source={PET_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="requestedOn" source="requestedOn" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="User"
          target="adoptionRequestsId"
          label="Users"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="adoptionRequests"
              source="adoptionrequest.id"
              reference="AdoptionRequest"
            >
              <TextField source={ADOPTIONREQUEST_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Email" source="email" />
            <TextField label="Full Name" source="firstName" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="LostAndFoundReports"
              source="lostandfoundreport.id"
              reference="LostAndFoundReport"
            >
              <TextField source={LOSTANDFOUNDREPORT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="pets" source="pet.id" reference="Pet">
              <TextField source={PET_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="phonenumber" source="phonenumber" />
            <TextField label="profilePicture" source="profilePicture" />
            <TextField label="Roles" source="roles" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
