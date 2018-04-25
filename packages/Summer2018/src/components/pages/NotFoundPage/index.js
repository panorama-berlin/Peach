import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import { Header } from '../../../components';

const NotFoundPage = () => (
  <article>
    <Header>
      <FormattedMessage {...messages.header} />
    </Header>
  </article>
);

export default NotFoundPage;
