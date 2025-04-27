import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AiMatchTitle } from "../aiMatch/AiMatchTitle";
import { UserTitle } from "../user/UserTitle";

export const LostAndFoundReportEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="aiMatches.id"
          reference="AiMatch"
          label="AIMatches"
        >
          <SelectInput optionText={AiMatchTitle} />
        </ReferenceInput>
        <TextInput label="contactInfo" source="contactInfo" type="email" />
        <TextInput label="description" multiline source="description" />
        <div />
        <TextInput label="location" source="location" />
        <TextInput label="petName" source="petName" />
        <SelectInput
          source="petType"
          label="petType"
          choices={[
            { label: "Dog", value: "Dog" },
            { label: "Cat", value: "Cat" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="reportType"
          label="reportType"
          choices={[
            { label: "Lost", value: "Lost" },
            { label: "Found", value: "Found" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="reportedBy.id"
          reference="User"
          label="reportedBy"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
