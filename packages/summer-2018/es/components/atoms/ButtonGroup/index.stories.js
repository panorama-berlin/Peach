import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Component from '.';
import Button from '../Button';

storiesOf('ButtonGroup', module).add('default', function () {
  return React.createElement(
    Component,
    null,
    React.createElement(
      Button,
      null,
      'One'
    ),
    React.createElement(
      Button,
      null,
      'Two'
    ),
    React.createElement(
      Button,
      null,
      'Three'
    )
  );
});