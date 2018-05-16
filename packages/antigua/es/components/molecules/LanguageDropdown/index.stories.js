import React from 'react';
import { storiesOf } from '@storybook/react';
import ComponentMock from './mocks';

storiesOf('LanguageDropdown', module).add('default', function () {
  return React.createElement(ComponentMock, null);
});