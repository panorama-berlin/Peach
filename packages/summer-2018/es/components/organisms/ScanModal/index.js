var _extends =
  Object.assign ||
  function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i]
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key]
        }
      }
    }
    return target
  }

function _classCallCheck (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

function _possibleConstructorReturn (self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }
  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self
}

function _inherits (subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass
    )
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  })
  if (superClass) {
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass)
  }
}

import React, { Component } from 'react'

import Button from '../../atoms/Button'
import Header from '../../atoms/Header'
import Image from '../../atoms/Image'
import Modal from '../../atoms/Modal'
import ModalContent from '../../atoms/ModalContent'
import ModalDescription from '../../atoms/ModalDescription'
import ModalActions from '../../atoms/ModalActions'

var ScanModal = (function (_Component) {
  _inherits(ScanModal, _Component)

  function ScanModal () {
    var _temp, _this, _ret

    _classCallCheck(this, ScanModal)

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key]
    }

    return (
      (_ret = ((_temp = ((_this = _possibleConstructorReturn(
        this,
        _Component.call.apply(_Component, [this].concat(args))
      )),
      _this)),
      (_this.state = { open: false }),
      (_this.componentDidMount = function () {
        _this._mounted = true
      }),
      (_this.componentWillUnmount = function () {
        _this._mounted = false
      }),
      (_this.close = function () {
        if (_this._mounted) _this.setState({ open: false })
      }),
      (_this.confirm = function (result) {
        _this.props.onConfirm(result)
        _this.close()
      }),
      _temp)),
      _possibleConstructorReturn(_this, _ret)
    )
  }

  ScanModal.getDerivedStateFromProps = function getDerivedStateFromProps (
    nextProps,
    prevState
  ) {
    return nextProps.scanData !== undefined
      ? _extends({}, prevState, { open: true })
      : null
  }

  ScanModal.prototype.render = function render () {
    var _this2 = this

    var open = this.state.open

    return React.createElement(
      Modal,
      {
        dimmer: 'blurring',
        open: open,
        onClose: function onClose () {
          return _this2.confirm(false)
        }
      },
      React.createElement(
        ModalContent,
        null,
        React.createElement(
          ModalDescription,
          null,
          React.createElement(Header, null, 'Pending Exhibitor Connection'),
          React.createElement(
            'p',
            null,
            "We've seen that you've just scanned an Exhibitor's QR code."
          ),
          React.createElement(
            'p',
            null,
            'Would you like to connect with: ',
            this.props.scanData,
            ' ?'
          )
        )
      ),
      React.createElement(
        ModalActions,
        null,
        React.createElement(Button, {
          color: 'black',
          content: 'Nope',
          onClick: function onClick () {
            return _this2.confirm(false)
          }
        }),
        React.createElement(Button, {
          positive: true,
          icon: 'checkmark',
          labelPosition: 'right',
          content: 'Yep, connect!',
          onClick: function onClick () {
            return _this2.confirm(true)
          }
        })
      )
    )
  }

  return ScanModal
})(Component)

export default ScanModal
