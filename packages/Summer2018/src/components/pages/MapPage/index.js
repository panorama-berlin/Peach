import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import { ScreenTemplate, Header, Image } from '../../../components'

import mapImage from './germanyHigh.svg'

const Content = styled.section`
  grid-row-start: 2;
  height: 80vh;
  width: 100vw;
  overflow: auto;
`

const MapImage = styled(props => <Image {...props} />)`
  width: 590px;
  height: 800px;
  overflow: auto;
  max-width: inherit;
`

const MapPage = ({ Footer }) => (
  <ScreenTemplate Footer={Footer}>
    <Helmet>
      <title>Map Page</title>
      <meta
        name='description'
        content='Map page of React.js Boilerplate application'
      />
    </Helmet>
    <Header>Map Page</Header>
    <Content>
      <MapImage src={mapImage} alt='map' />
    </Content>
  </ScreenTemplate>
)

export default MapPage
