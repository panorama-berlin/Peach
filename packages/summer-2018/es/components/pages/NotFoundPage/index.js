import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import { Header } from '../../../components';

var NotFoundPage = function NotFoundPage() {
  return React.createElement(
    'article',
    null,
    React.createElement(
      Header,
      null,
      React.createElement(FormattedMessage, messages.header)
    )
  );
};

export default NotFoundPage;