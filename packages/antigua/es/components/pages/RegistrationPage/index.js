import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import { Header } from '../../../components';

var RegistrationPage = function RegistrationPage() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      Helmet,
      null,
      React.createElement(
        'title',
        null,
        'Registration Page'
      ),
      React.createElement('meta', {
        name: 'description',
        content: 'Registration page of React.js Boilerplate application'
      })
    ),
    React.createElement(
      Header,
      null,
      React.createElement(FormattedMessage, messages.header)
    )
  );
};

export default RegistrationPage;