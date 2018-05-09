import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Component from '.';

storiesOf('LogoutButton', module).add('default', function () {
  return React.createElement(Component, { onLogOut: action('log out!') });
});