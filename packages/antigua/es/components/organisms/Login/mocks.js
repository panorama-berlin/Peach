import React from 'react';
import { action } from '@storybook/addon-actions';
import Component from '.';

export var ComponentMock = function ComponentMock() {
  return React.createElement(Component, { onLogIn: action('logging in!'), isLoggingIn: false });
};

export default ComponentMock;