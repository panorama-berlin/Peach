import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Component from '.';

storiesOf('Header', module).add('tiny', function () {
  return React.createElement(
    Component,
    { size: 'tiny' },
    'Header'
  );
}).add('small', function () {
  return React.createElement(
    Component,
    { size: 'small' },
    'Header'
  );
}).add('medium', function () {
  return React.createElement(
    Component,
    { size: 'medium' },
    'Header'
  );
}).add('large', function () {
  return React.createElement(
    Component,
    { size: 'large' },
    'Header'
  );
}).add('huge', function () {
  return React.createElement(
    Component,
    { size: 'huge' },
    'Header'
  );
});