import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import messages from './messages'
import { Header, QrCode, LogoutButton } from '../../../components'

const UserPage = ({ LogoutModal, LanguageDropdown, currentUser }) => (
  <div>
    <Helmet>
      <title>User Page</title>
      <meta
        name='description'
        content='User page of React.js Boilerplate application'
      />
    </Helmet>
    <Header>
      <FormattedMessage {...messages.header} />
    </Header>
    <QrCode value={currentUser.id} size={200} />
    <LogoutModal />
    <LanguageDropdown />
  </div>
)

UserPage.propTypes = {
  currentUser: PropTypes.object.isRequired
}

export default UserPage
