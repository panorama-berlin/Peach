import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Component from '.'

storiesOf('Header', module)
  .add('tiny', () => <Component size='tiny'>Header</Component>)
  .add('small', () => <Component size='small'>Header</Component>)
  .add('medium', () => <Component size='medium'>Header</Component>)
  .add('large', () => <Component size='large'>Header</Component>)
  .add('huge', () => <Component size='huge'>Header</Component>)
