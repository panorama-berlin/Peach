import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Component from '.'
import ListItem from '../ListItem'

storiesOf('List', module).add('default', () => (
  <Component>
    <ListItem>Apples</ListItem>
    <ListItem>Pears</ListItem>
    <ListItem>Oranges</ListItem>
  </Component>
))
