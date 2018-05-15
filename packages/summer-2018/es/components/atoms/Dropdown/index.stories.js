import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Component from '.';

var options = [{
  key: 'Red',
  text: 'Red',
  value: 'Red'
}, {
  key: 'Blue',
  text: 'Blue',
  value: 'Blue'
}];

storiesOf('Dropdown', module).add('default', function () {
  return React.createElement(Component, { options: options, text: 'Select Colour' });
});