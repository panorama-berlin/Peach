import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Component from '.'

storiesOf('Button', module)
  .add('default', function () {
    return React.createElement(
      Component,
      { onClick: action('clicked') },
      'Button'
    )
  })
  .add('primary', function () {
    return React.createElement(
      Component,
      { primary: true, onClick: action('clicked') },
      'Button'
    )
  })
