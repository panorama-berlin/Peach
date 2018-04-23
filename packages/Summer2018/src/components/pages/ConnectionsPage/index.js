import React from "react";
import { Helmet } from "react-helmet";

import { ScreenTemplate, H1 } from "../../../components";

const ConnectionsPage = ({ Footer }) => (
  <ScreenTemplate Footer={Footer}>
    <Helmet>
      <title>Connections Page</title>
      <meta
        name="description"
        content="Connections page of React.js Boilerplate application"
      />
    </Helmet>
    <H1>
      Connections Page
    </H1>
  </ScreenTemplate>
);

export default ConnectionsPage;
