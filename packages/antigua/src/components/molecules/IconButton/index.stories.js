import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Component from '.'

const mockLink = { icon: 'home', to: '/home' }

storiesOf('IconButton', module).add('default', () => (
  <Component link={mockLink} />
))
