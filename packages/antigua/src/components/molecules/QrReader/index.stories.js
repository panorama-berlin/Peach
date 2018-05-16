import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Component from '.'

storiesOf('QrReader', module).add('default', () => (
  <Component
    onScan={action('onScan')}
    clearScan={action('clearScan')}
    existingScan={false}
  />
))
