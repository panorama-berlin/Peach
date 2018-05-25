import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Component from '.';
import { ScreenTemplate, LogoutButton, LogoutModal } from '../../../components';
import LanguageDropdown from '../../molecules/LanguageDropdown/mocks';
import Footer from '../../organisms/Footer/mocks';

var Logout = function Logout() {
  return React.createElement(
    LogoutButton,
    { onLogOut: function onLogOut() {} },
    'Log Out'
  );
};

var MockLogoutModal = function MockLogoutModal() {
  return React.createElement(LogoutModal, { onConfirm: function onConfirm() {} });
};

var currentUser = {
  id: '123456789',
  name: 'John Smith',
  roles: ['VISITOR']
};

storiesOf('UserPage', module).add('default', function () {
  return React.createElement(
    ScreenTemplate,
    { Footer: Footer },
    React.createElement(Component, {
      Logout: Logout,
      LogoutModal: MockLogoutModal,
      LanguageDropdown: LanguageDropdown,
      currentUser: currentUser
    })
  );
});