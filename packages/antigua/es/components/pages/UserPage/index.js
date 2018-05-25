import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import { Header, QrCode, LogoutButton } from '../../../components';

var UserPage = function UserPage(_ref) {
  var LogoutModal = _ref.LogoutModal,
      LanguageDropdown = _ref.LanguageDropdown,
      currentUser = _ref.currentUser;
  return React.createElement(
    'div',
    null,
    React.createElement(
      Helmet,
      null,
      React.createElement(
        'title',
        null,
        'User Page'
      ),
      React.createElement('meta', {
        name: 'description',
        content: 'User page of React.js Boilerplate application'
      })
    ),
    React.createElement(
      Header,
      null,
      React.createElement(FormattedMessage, messages.header)
    ),
    React.createElement(QrCode, { value: currentUser.id, size: 200 }),
    React.createElement(LogoutModal, null),
    React.createElement(LanguageDropdown, null)
  );
};

UserPage.propTypes = {
  currentUser: PropTypes.object.isRequired
};

export default UserPage;