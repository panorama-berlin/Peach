import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Component from '.'
import { ScreenTemplate } from '../../../components'
import Footer from '../../organisms/Footer/mocks'

storiesOf('HomePage', module).add('default', () => (
  <ScreenTemplate Footer={Footer}>
    <Component />
  </ScreenTemplate>
))
