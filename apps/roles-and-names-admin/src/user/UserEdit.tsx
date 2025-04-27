import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  PasswordInput,
} from "react-admin";

import { AdoptionRequestTitle } from "../adoptionRequest/AdoptionRequestTitle";
import { LostAndFoundReportTitle } from "../lostAndFoundReport/LostAndFoundReportTitle";
import { PetTitle } from "../pet/PetTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="adoptionRequests.id"
          reference="AdoptionRequest"
          label="adoptionRequests"
        >
          <SelectInput optionText={AdoptionRequestTitle} />
        </ReferenceInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Full Name" source="firstName" />
        <ReferenceInput
          source="lostAndFoundReports.id"
          reference="LostAndFoundReport"
          label="LostAndFoundReports"
        >
          <SelectInput optionText={LostAndFoundReportTitle} />
        </ReferenceInput>
        <PasswordInput label="Password" source="password" />
        <ReferenceInput source="pets.id" reference="Pet" label="pets">
          <SelectInput optionText={PetTitle} />
        </ReferenceInput>
        <TextInput label="phonenumber" source="phonenumber" />
        <div />
        <SelectInput
          source="roles"
          label="Roles"
          choices={[
            { label: "USER", value: "User" },
            { label: "ADMIN", value: "Admin" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
