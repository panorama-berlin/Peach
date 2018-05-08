import React from 'react'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'

import messages from './messages'
import { ScreenTemplate, Header } from '../../../components'

var HomePage = function HomePage (_ref) {
  var Footer = _ref.Footer
  return React.createElement(
    ScreenTemplate,
    { Footer: Footer },
    React.createElement(
      Helmet,
      null,
      React.createElement('title', null, 'Home Page'),
      React.createElement('meta', {
        name: 'description',
        content: 'Home page of React.js Boilerplate application'
      })
    ),
    React.createElement(
      Header,
      null,
      React.createElement(FormattedMessage, messages.header)
    )
  )
}

export default HomePage
