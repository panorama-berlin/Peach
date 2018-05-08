import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Component from '.'
import { Footer, QrReader, ScanModal } from '../../../components'

var mockLinks = [
  { icon: 'home', to: '/home' },
  { icon: 'compass', to: '/' },
  { icon: 'camera retro', to: '/scan' },
  { icon: 'heart', to: '/' },
  { icon: 'user', to: '/' }
]

var FooterMock = function FooterMock () {
  return React.createElement(Footer, { links: mockLinks })
}

var QrReaderMock = function QrReaderMock () {
  return React.createElement(QrReader, {
    onScan: function onScan () {},
    clearScan: function clearScan () {}
  })
}

var ScanModalMock = function ScanModalMock () {
  return React.createElement(ScanModal, {
    scanData: undefined,
    onConfirm: function onConfirm () {}
  })
}

storiesOf('ScanPage', module).add('default', function () {
  return React.createElement(Component, {
    Footer: FooterMock,
    QrReader: QrReaderMock,
    ScanModal: ScanModalMock
  })
})
