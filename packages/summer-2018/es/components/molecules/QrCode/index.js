function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import QRious from 'qrious';

var QRCode = function (_React$Component) {
  _inherits(QRCode, _React$Component);

  function QRCode(props) {
    _classCallCheck(this, QRCode);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.updateQrCode = function (_ref) {
      var value = _ref.value,
          size = _ref.size;

      if (_this.qrCode) {
        _this.qrCode.set({
          size: size,
          value: value
        });
      }
    };

    _this.canvas = React.createRef();
    return _this;
  }

  QRCode.prototype.componentDidMount = function componentDidMount() {
    this.qrCode = new QRious({
      element: this.canvas.current
    });
    this.updateQrCode(this.props);
  };

  QRCode.prototype.render = function render() {
    this.updateQrCode(this.props);
    return React.createElement('canvas', { ref: this.canvas });
  };

  return QRCode;
}(React.Component);

QRCode.defaultProps = {
  size: 500
};

QRCode.propTypes = {
  value: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
};

export default QRCode;