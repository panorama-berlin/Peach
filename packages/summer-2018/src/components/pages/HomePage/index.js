import React from 'react'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'

import messages from './messages'
import { ScreenTemplate, Header } from '../../../components'

const HomePage = ({ Footer }) => (
  <ScreenTemplate Footer={Footer}>
    <Helmet>
      <title>Home Page</title>
      <meta
        name='description'
        content='Home page of React.js Boilerplate application'
      />
    </Helmet>
    <Header>
      <FormattedMessage {...messages.header} />
    </Header>
  </ScreenTemplate>
)

export default HomePage
