import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import { H1 } from '../../../components';

const NotFoundPage = () => (
  <article>
    <H1>
      <FormattedMessage {...messages.header} />
    </H1>
  </article>
);

export default NotFoundPage;
