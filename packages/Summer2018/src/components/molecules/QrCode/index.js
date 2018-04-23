import React from 'react'
import PropTypes from "prop-types";
import QRious from 'qrious'

class QRCode extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }
  componentDidMount() {
    this.qrCode = new QRious({
      element: this.canvas.current
    })
    this.updateQrCode(this.props);
  }
  updateQrCode = ({ value, size }) => {
    if (this.qrCode) this.qrCode.set({
      size,
      value
    })
  }
  render() {
    this.updateQrCode(this.props);
    return <canvas ref={this.canvas}></canvas>;
  }
}

QRCode.defaultProps = {
  size: 500
};

QRCode.propTypes = {
  value: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
};

export default QRCode;
