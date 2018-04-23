import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import Button from "../../atoms/Button";

const LogoutButton = ({ onLogOut }) => (
  <Button onClick={onLogOut}>
    <FormattedMessage {...messages.logOut} />
  </Button>
);

LogoutButton.propTypes = {
  onLogOut: PropTypes.func.isRequired,
};

export default LogoutButton;
