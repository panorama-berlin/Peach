import React from 'react'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'

import messages from './messages'
import { ScreenTemplate, Header } from '../../../components'

var ConnectionsPage = function ConnectionsPage (_ref) {
  var Footer = _ref.Footer,
    ConnectionList = _ref.ConnectionList
  return React.createElement(
    ScreenTemplate,
    { Footer: Footer },
    React.createElement(
      Helmet,
      null,
      React.createElement('title', null, 'Connections'),
      React.createElement('meta', {
        name: 'description',
        content: 'Connections page of React.js Boilerplate application'
      })
    ),
    React.createElement(
      Header,
      null,
      React.createElement(FormattedMessage, messages.header)
    ),
    React.createElement(ConnectionList, null)
  )
}

export default ConnectionsPage
