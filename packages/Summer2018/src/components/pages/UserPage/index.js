import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import { ScreenTemplate, Header, QrCode } from "../../../components";

const UserPage = ({ Footer, Logout, currentUser }) => {
  console.log('currentUser', currentUser);
  return (
    <ScreenTemplate Footer={Footer}>
      <Helmet>
        <title>User Page</title>
        <meta
          name="description"
          content="User page of React.js Boilerplate application"
        />
      </Helmet>
      <Header>
        <FormattedMessage {...messages.header} />
      </Header>
      <QrCode value={currentUser.id} size={200} />
      <Logout />
    </ScreenTemplate>
  );
}

UserPage.propTypes = {
  currentUser: PropTypes.object.isRequired
};

export default UserPage;
