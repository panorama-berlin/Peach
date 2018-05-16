import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Component from '.'
import { Dimmer } from 'semantic-ui-react'

storiesOf('Loader', module)
  .add('default', () => (
    <Dimmer active inverted>
      <Component />
    </Dimmer>
  ))
  .add('inverted', () => (
    <Dimmer active>
      <Component inverted />
    </Dimmer>
  ))
