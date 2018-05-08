import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Component from '.'

storiesOf('ScanModal', module).add('default', function () {
  return React.createElement(Component, {
    scanData: '123456789',
    onConfirm: action('onConfirm')
  })
})
