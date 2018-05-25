import React from 'react'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'

import messages from './messages'
import { Header } from '../../../components'

const ConnectionsPage = ({ Footer, ConnectionList }) => (
  <div>
    <Helmet>
      <title>Connections</title>
      <meta
        name='description'
        content='Connections page of React.js Boilerplate application'
      />
    </Helmet>
    <Header>
      <FormattedMessage {...messages.header} />
    </Header>
    <ConnectionList />
  </div>
)

export default ConnectionsPage
