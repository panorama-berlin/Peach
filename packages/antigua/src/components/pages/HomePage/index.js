import React from 'react'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'

import messages from './messages'
import { Header } from '../../../components'

const HomePage = () => (
  <div>
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
  </div>
)

export default HomePage
