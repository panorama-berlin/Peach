import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Component from '.'

storiesOf('List', module).add('default', () => (
  <Component>
    <Component.Item>Apples</Component.Item>
    <Component.Item>Pears</Component.Item>
    <Component.Item>Oranges</Component.Item>
  </Component>
))
