import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LOSTANDFOUNDREPORT_TITLE_FIELD } from "../lostAndFoundReport/LostAndFoundReportTitle";
import { PET_TITLE_FIELD } from "../pet/PetTitle";

export const AiMatchList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AIMatches"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
