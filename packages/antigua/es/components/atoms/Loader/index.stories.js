import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Component from '.';
import { Dimmer } from 'semantic-ui-react';

storiesOf('Loader', module).add('default', function () {
  return React.createElement(
    Dimmer,
    { active: true, inverted: true },
    React.createElement(Component, null)
  );
}).add('inverted', function () {
  return React.createElement(
    Dimmer,
    { active: true },
    React.createElement(Component, { inverted: true })
  );
});