import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Component from '.';
import { Login } from '../../../components';

var LoginMock = function LoginMock() {
  return React.createElement(Login, { onLogIn: function onLogIn() {}, isLoggingIn: false });
};

storiesOf('LoginPage', module).add('default', function () {
  return React.createElement(Component, { Login: LoginMock });
});