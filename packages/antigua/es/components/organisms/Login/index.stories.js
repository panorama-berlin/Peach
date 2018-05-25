import React from 'react';
import { storiesOf } from '@storybook/react';
import MockComponent from './mocks';

storiesOf('Login', module).add('default', function () {
  return React.createElement(MockComponent, null);
});