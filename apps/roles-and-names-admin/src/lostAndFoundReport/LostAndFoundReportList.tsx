import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { AIMATCH_TITLE_FIELD } from "../aiMatch/AiMatchTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const LostAndFoundReportList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"LostAndFoundReports"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField
          label="AIMatches"
          source="aimatch.id"
          reference="AiMatch"
        >
          <TextField source={AIMATCH_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="contactInfo" source="contactInfo" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="imageURL" source="imageUrl" />
        <TextField label="location" source="location" />
        <TextField label="petName" source="petName" />
        <TextField label="petType" source="petType" />
        <TextField label="reportType" source="reportType" />
        <ReferenceField label="reportedBy" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
