import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { AIMATCH_TITLE_FIELD } from "../aiMatch/AiMatchTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PetList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"pets"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
