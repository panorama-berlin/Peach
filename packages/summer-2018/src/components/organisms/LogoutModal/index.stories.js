import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Component from '.'

storiesOf('LogoutModal', module).add('default', () => (
  <Component open onConfirm={action('onConfirm')} />
))
