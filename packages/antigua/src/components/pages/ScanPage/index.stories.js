import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Component from '.'
import { ScreenTemplate, QrReader, ScanModal } from '../../../components'
import Footer from '../../organisms/Footer/mocks'

const QrReaderMock = () => <QrReader onScan={() => {}} clearScan={() => {}} />

const ScanModalMock = () => (
  <ScanModal scanData={undefined} onConfirm={() => {}} />
)

storiesOf('ScanPage', module).add('default', () => (
  <ScreenTemplate Footer={Footer}>
    <Component QrReader={QrReaderMock} ScanModal={ScanModalMock} />
  </ScreenTemplate>
))
