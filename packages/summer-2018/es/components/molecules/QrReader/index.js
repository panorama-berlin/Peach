var _templateObject = _taggedTemplateLiteralLoose(['\n&& {\n  height: 100%;\n  width: 143%;\n  margin-left: -21%;\n}\n'], ['\n&& {\n  height: 100%;\n  width: 143%;\n  margin-left: -21%;\n}\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import ReactQrReader from 'react-qr-reader';
import styled from 'styled-components';

var StyledReactQrReader = styled(ReactQrReader)(_templateObject);

var QrReader = function (_React$PureComponent) {
  _inherits(QrReader, _React$PureComponent);

  function QrReader(props) {
    _classCallCheck(this, QrReader);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.handleScan = function (newScanData) {
      var _this$props = _this.props,
          scanData = _this$props.scanData,
          onScan = _this$props.onScan;

      if (!scanData && newScanData) onScan(newScanData);
    };

    _this.handleError = function (err) {};

    _this.state = {
      delay: 1000
    };
    return _this;
  }

  QrReader.prototype.componentWillUnmount = function componentWillUnmount() {
    this.props.clearScan();
  };

  QrReader.prototype.render = function render() {
    return React.createElement(StyledReactQrReader, {
      delay: this.state.delay,
      onError: this.handleError,
      onScan: this.handleScan,
      showViewFinder: false
    });
  };

  return QrReader;
}(React.PureComponent);

export default QrReader;