import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Component from '.';

storiesOf('QrCode', module).add('default', function () {
  return React.createElement(Component, { value: 'asfgsdfasdf', size: 300 });
});