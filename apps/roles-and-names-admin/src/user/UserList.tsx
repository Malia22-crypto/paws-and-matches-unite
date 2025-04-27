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
import { ADOPTIONREQUEST_TITLE_FIELD } from "../adoptionRequest/AdoptionRequestTitle";
import { LOSTANDFOUNDREPORT_TITLE_FIELD } from "../lostAndFoundReport/LostAndFoundReportTitle";
import { PET_TITLE_FIELD } from "../pet/PetTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Users"} perPage={50} pagination={<Pagination />}>
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
        <TextField label="Username" source="username" />{" "}
      </Datagrid>
    </List>
  );
};
