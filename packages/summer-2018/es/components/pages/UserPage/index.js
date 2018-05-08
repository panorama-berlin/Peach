import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import messages from './messages'
import {
  ScreenTemplate,
  Header,
  QrCode,
  LogoutButton
} from '../../../components'

var UserPage = function UserPage (_ref) {
  var Footer = _ref.Footer,
    LogoutModal = _ref.LogoutModal,
    currentUser = _ref.currentUser
  return React.createElement(
    ScreenTemplate,
    { Footer: Footer },
    React.createElement(
      Helmet,
      null,
      React.createElement('title', null, 'User Page'),
      React.createElement('meta', {
        name: 'description',
        content: 'User page of React.js Boilerplate application'
      })
    ),
    React.createElement(
      Header,
      null,
      React.createElement(FormattedMessage, messages.header)
    ),
    React.createElement(QrCode, { value: currentUser.id, size: 200 }),
    React.createElement(LogoutModal, null)
  )
}

UserPage.propTypes = {
  currentUser: PropTypes.object.isRequired
}

export default UserPage