import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import messages from './messages'
import Button from '../../atoms/Button'

var LogoutButton = function LogoutButton (_ref) {
  var onLogOut = _ref.onLogOut
  return React.createElement(
    Button,
    { onClick: onLogOut },
    React.createElement(FormattedMessage, messages.logOut)
  )
}

LogoutButton.propTypes = {
  onLogOut: PropTypes.func.isRequired
}

export default LogoutButton
