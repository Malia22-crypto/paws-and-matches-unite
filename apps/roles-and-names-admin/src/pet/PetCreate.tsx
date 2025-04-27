import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { AdoptionRequestTitle } from "../adoptionRequest/AdoptionRequestTitle";
import { AiMatchTitle } from "../aiMatch/AiMatchTitle";
import { UserTitle } from "../user/UserTitle";

export const PetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="adoptionRequests"
          reference="AdoptionRequest"
        >
          <SelectArrayInput
            optionText={AdoptionRequestTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Age" source="age" />
        <ReferenceInput
          source="aiMatches.id"
          reference="AiMatch"
          label="AIMatches"
        >
          <SelectInput optionText={AiMatchTitle} />
        </ReferenceInput>
        <TextInput label="Breed" source="breed" />
        <TextInput label="Description" multiline source="description" />
        <SelectInput
          source="gender"
          label="Gender"
          choices={[
            { label: "Male", value: "Male" },
            { label: "Female ", value: "Female" },
            { label: "Unknown", value: "Unknown" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <div />
        <TextInput label="Location" source="location" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="owner.id" reference="User" label="Owner">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Available", value: "Available" },
            { label: "Adopted", value: "Adopted" },
            { label: "Lost", value: "Lost" },
            { label: "Found", value: "Found" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="typeField"
          label="Type"
          choices={[
            { label: "Cat", value: "Cat" },
            { label: "Dog", value: "Dog" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
