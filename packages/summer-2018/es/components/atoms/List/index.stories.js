import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Component from '.'
import ListItem from '../ListItem'

storiesOf('List', module).add('default', function () {
  return React.createElement(
    Component,
    null,
    React.createElement(ListItem, null, 'Apples'),
    React.createElement(ListItem, null, 'Pears'),
    React.createElement(ListItem, null, 'Oranges')
  )
})
