import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { PetTitle } from "../pet/PetTitle";

export const AdoptionRequestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="adopter" reference="User">
          <SelectArrayInput
            optionText={UserTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="message" multiline source="message" />
        <ReferenceInput source="pet.id" reference="Pet" label="pet">
          <SelectInput optionText={PetTitle} />
        </ReferenceInput>
        <DateTimeInput label="requestedOn" source="requestedOn" />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "PENDING", value: "Pending" },
            { label: "APPROVED", value: "Approved" },
            { label: "REJECTED", value: "Rejected" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
