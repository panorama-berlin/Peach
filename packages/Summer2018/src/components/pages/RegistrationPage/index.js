import React from "react";
import { Helmet } from "react-helmet";
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import { H1 } from "../../../components";

const RegistrationPage = () => (
  <div>
    <Helmet>
      <title>Registration Page</title>
      <meta
        name="description"
        content="Registration page of React.js Boilerplate application"
      />
    </Helmet>
    <H1>
      <FormattedMessage {...messages.header} />
    </H1>
  </div>
);

export default RegistrationPage;
