import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Component from '.'
import { ScreenTemplate } from '../../../components'
import Footer from '../../organisms/Footer/mocks'
import ConnectionList from '../../organisms/ConnectionList/mocks'

storiesOf('ConnectionsPage', module).add('default', () => (
  <ScreenTemplate Footer={Footer}>
    <Component ConnectionList={ConnectionList} />
  </ScreenTemplate>
))
