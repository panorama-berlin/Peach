import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MockComponent from './mocks';

storiesOf('Footer', module).add('default', function () {
  return React.createElement(MockComponent, null);
});