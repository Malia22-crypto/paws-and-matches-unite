import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { PetList } from "./pet/PetList";
import { PetCreate } from "./pet/PetCreate";
import { PetEdit } from "./pet/PetEdit";
import { PetShow } from "./pet/PetShow";
import { LostAndFoundReportList } from "./lostAndFoundReport/LostAndFoundReportList";
import { LostAndFoundReportCreate } from "./lostAndFoundReport/LostAndFoundReportCreate";
import { LostAndFoundReportEdit } from "./lostAndFoundReport/LostAndFoundReportEdit";
import { LostAndFoundReportShow } from "./lostAndFoundReport/LostAndFoundReportShow";
import { AiMatchList } from "./aiMatch/AiMatchList";
import { AiMatchCreate } from "./aiMatch/AiMatchCreate";
import { AiMatchEdit } from "./aiMatch/AiMatchEdit";
import { AiMatchShow } from "./aiMatch/AiMatchShow";
import { AdoptionRequestList } from "./adoptionRequest/AdoptionRequestList";
import { AdoptionRequestCreate } from "./adoptionRequest/AdoptionRequestCreate";
import { AdoptionRequestEdit } from "./adoptionRequest/AdoptionRequestEdit";
import { AdoptionRequestShow } from "./adoptionRequest/AdoptionRequestShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"roles and names"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Pet"
          list={PetList}
          edit={PetEdit}
          create={PetCreate}
          show={PetShow}
        />
        <Resource
          name="LostAndFoundReport"
          list={LostAndFoundReportList}
          edit={LostAndFoundReportEdit}
          create={LostAndFoundReportCreate}
          show={LostAndFoundReportShow}
        />
        <Resource
          name="AiMatch"
          list={AiMatchList}
          edit={AiMatchEdit}
          create={AiMatchCreate}
          show={AiMatchShow}
        />
        <Resource
          name="AdoptionRequest"
          list={AdoptionRequestList}
          edit={AdoptionRequestEdit}
          create={AdoptionRequestCreate}
          show={AdoptionRequestShow}
        />
      </Admin>
    </div>
  );
};

export default App;
