import React from "react";
import ReactQrReader from "react-qr-reader";
import styled from 'styled-components'

const StyledReactQrReader = styled(ReactQrReader)`
  height: 100%;
  width: 143%;
  margin-left: -21%;
`

class QrReader extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      delay: 1000
    };
  }
  handleScan = newScanData => {
    const { scanData, onScan } = this.props;
    if (!scanData && newScanData) onScan(newScanData)
  };
  handleError = err => {};
  componentWillUnmount() {
    this.props.clearScan()
  }
  render() {
    return (
      <StyledReactQrReader
        delay={this.state.delay}
        onError={this.handleError}
        onScan={this.handleScan}
        showViewFinder={false}
      />
    );
  }
}

export default QrReader
