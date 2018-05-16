var _templateObject = _taggedTemplateLiteralLoose(['\n&& {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: 3em 3em 3em;\n  grid-row-gap: 1.618em;\n}\n'], ['\n&& {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: 3em 3em 3em;\n  grid-row-gap: 1.618em;\n}\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n&& {\n  grid-column-start: 1;\n  grid-row-start: 1;\n}\n'], ['\n&& {\n  grid-column-start: 1;\n  grid-row-start: 1;\n}\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n&& {\n  grid-column-start: 1;\n  grid-row-start: 2;\n}\n'], ['\n&& {\n  grid-column-start: 1;\n  grid-row-start: 2;\n}\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n&& {\n  grid-row-start: 3;\n}\n'], ['\n&& {\n  grid-row-start: 3;\n}\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';

var Wrapper = styled.div(_templateObject);

var Email = styled(function (props) {
  return React.createElement(Input, props);
})(_templateObject2);

var Password = styled(function (props) {
  return React.createElement(Input, props);
})(_templateObject3);

var StyledButton = styled(function (props) {
  return React.createElement(Button, props);
})(_templateObject4);

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.onLogInClick = function () {
      // const { isFormShown } = this.state;
      // if (!isFormShown) {
      //   this.setState({ isFormShown: true });
      // } else {
      //   const { email, password } = this.state;
      //   this.props.onLogin(email, password);
      // }

      var _this$state = _this.state,
          email = _this$state.email,
          password = _this$state.password;

      _this.props.onLogIn(email, password);
    };

    _this.state = {
      email: 'admin@example.com',
      password: 'admin@example.com',
      isFormShown: false
    };
    return _this;
  }

  Login.prototype.render = function render() {
    var _this2 = this;

    var isFormShown = this.state.isFormShown;
    var isLoggingIn = this.props.isLoggingIn;

    var showForm = !isLoggingIn && isFormShown;
    var showButton = !isLoggingIn;
    var showSpinner = isLoggingIn;

    return React.createElement(
      Wrapper,
      null,
      React.createElement(Email, {
        value: this.state.email,
        onChange: function onChange(event) {
          return _this2.setState({ email: event.target.value });
        }
      }),
      React.createElement(Password, {
        value: this.state.password,
        onChange: function onChange(event) {
          return _this2.setState({ password: event.target.value });
        }
      }),
      React.createElement(
        StyledButton,
        { primary: true, fluid: true, onClick: this.onLogInClick },
        React.createElement(FormattedMessage, messages.loginButton)
      )
    );
  };

  return Login;
}(React.Component);

Login.propTypes = {
  isLoggingIn: PropTypes.bool.isRequired,
  onLogIn: PropTypes.func.isRequired
};

export default Login;