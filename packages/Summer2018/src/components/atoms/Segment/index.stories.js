import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Component from '.'

storiesOf('Segment', module).add('default', () => (
  <Component>Pellentesque habitant morbi tristique senectus.</Component>
))
