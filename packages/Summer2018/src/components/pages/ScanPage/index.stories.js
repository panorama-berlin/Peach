import React from "react";
import { storiesOf } from '@storybook/react'
import { action } from "@storybook/addon-actions";
import Component from ".";
import { Footer, QrReader, ScanModal } from "../../../components";

const mockLinks = [
  { icon: 'home', to: '/home' },
  { icon: 'compass', to: '/' },
  { icon: 'frame', to: '/scan' },
  { icon: 'heart', to: '/' },
  { icon: 'user', to: '/' }
]

const FooterMock = () => <Footer links={mockLinks} />;

const QrReaderMock = () => <QrReader onScan={() => {}} clearScan={() => {}}/>;

const ScanModalMock = () => <ScanModal scanData={undefined} onConfirm={() => {}}/>;

storiesOf("ScanPage", module)
  .add("default", () => (
    <Component Footer={FooterMock} QrReader={QrReaderMock} ScanModal={ScanModalMock} />
  ));
