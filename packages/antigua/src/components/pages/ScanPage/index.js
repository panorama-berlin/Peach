import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const QrReaderWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`

const ScanPage = ({ QrReader, ScanModal }) => (
  <div>
    <Helmet>
      <title>QR Code Page</title>
      <meta
        name='description'
        content='QR Code page of React.js Boilerplate application'
      />
    </Helmet>
    <QrReaderWrapper>
      <QrReader />
    </QrReaderWrapper>
    <ScanModal />
  </div>
)

ScanPage.propTypes = {
  QrReader: PropTypes.func.isRequired,
  ScanModal: PropTypes.func.isRequired
}

export default ScanPage
