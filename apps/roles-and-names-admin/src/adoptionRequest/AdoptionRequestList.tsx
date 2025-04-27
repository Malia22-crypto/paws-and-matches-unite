import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PET_TITLE_FIELD } from "../pet/PetTitle";

export const AdoptionRequestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"adoptionRequests"}
      perPage={50}
      pagination={<Pagination />}
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
