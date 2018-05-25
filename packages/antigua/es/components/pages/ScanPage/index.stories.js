import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Component from '.';
import { ScreenTemplate, QrReader, ScanModal } from '../../../components';
import Footer from '../../organisms/Footer/mocks';

var QrReaderMock = function QrReaderMock() {
  return React.createElement(QrReader, { onScan: function onScan() {}, clearScan: function clearScan() {} });
};

var ScanModalMock = function ScanModalMock() {
  return React.createElement(ScanModal, { scanData: undefined, onConfirm: function onConfirm() {} });
};

storiesOf('ScanPage', module).add('default', function () {
  return React.createElement(
    ScreenTemplate,
    { Footer: Footer },
    React.createElement(Component, { QrReader: QrReaderMock, ScanModal: ScanModalMock })
  );
});