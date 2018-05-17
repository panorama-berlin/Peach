import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ComponentMock from './mocks';

storiesOf('Dropdown', module).add('default', function () {
  return React.createElement(ComponentMock, null);
});