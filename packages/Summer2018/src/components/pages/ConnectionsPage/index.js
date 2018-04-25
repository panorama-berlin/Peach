import React from "react";
import { Helmet } from "react-helmet";

import { ScreenTemplate, Header } from "../../../components";

const ConnectionsPage = ({ Footer }) => (
  <ScreenTemplate Footer={Footer}>
    <Helmet>
      <title>Connections Page</title>
      <meta
        name="description"
        content="Connections page of React.js Boilerplate application"
      />
    </Helmet>
    <Header>
      Connections Page
    </Header>
  </ScreenTemplate>
);

export default ConnectionsPage;
