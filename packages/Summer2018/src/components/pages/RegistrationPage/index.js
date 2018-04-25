import React from "react";
import { Helmet } from "react-helmet";
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import { Header } from "../../../components";

const RegistrationPage = () => (
  <div>
    <Helmet>
      <title>Registration Page</title>
      <meta
        name="description"
        content="Registration page of React.js Boilerplate application"
      />
    </Helmet>
    <Header>
      <FormattedMessage {...messages.header} />
    </Header>
  </div>
);

export default RegistrationPage;
