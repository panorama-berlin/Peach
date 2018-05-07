import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Component from '.'

storiesOf('Login', module).add('default', () => (
  <Component onLogIn={action('logging in!')} isLoggingIn={false} />
))
