import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import { ScreenTemplate, H1, Img} from "../../../components";

import mapImage from "./germanyHigh.svg";

const Content = styled.section`
  grid-row-start: 2;
  height: 68vh;
  width: 100vw;
  overflow: auto;
`

const MapImage = styled(Img)`
  width: 590px;
  height: 800px;
  overflow: scroll;
`;

const MapPage = ({ Footer }) => (
  <ScreenTemplate Footer={Footer}>
    <Helmet>
      <title>Map Page</title>
      <meta
        name="description"
        content="Map page of React.js Boilerplate application"
      />
    </Helmet>
    <H1>
      Map Page
    </H1>
    <Content>
      <MapImage src={mapImage} alt="map" />
    </Content>
  </ScreenTemplate>
);

export default MapPage;
