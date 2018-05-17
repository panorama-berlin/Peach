import React from 'react'
import { action } from '@storybook/addon-actions'
import Component from '.'

export const ComponentMock = () => (
  <Component onLogIn={action('logging in!')} isLoggingIn={false} />
)

export default ComponentMock
