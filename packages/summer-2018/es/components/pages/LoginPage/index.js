var _templateObject = _taggedTemplateLiteralLoose(
    [
      '\n&& {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-repeat: round;\n  background-image: url(',
      ');\n}\n'
    ],
    [
      '\n&& {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-repeat: round;\n  background-image: url(',
      ');\n}\n'
    ]
  ),
  _templateObject2 = _taggedTemplateLiteralLoose(
    [
      '\n&& {\n  height: 100%;\n  margin: auto 10%;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto 1fr;\n  grid-row-gap: 4em;\n}\n'
    ],
    [
      '\n&& {\n  height: 100%;\n  margin: auto 10%;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto 1fr;\n  grid-row-gap: 4em;\n}\n'
    ]
  ),
  _templateObject3 = _taggedTemplateLiteralLoose(
    ['\n&& {\n  width: 100%;\n  grid-row-start: 1;\n  padding-top: 4em;\n}\n'],
    ['\n&& {\n  width: 100%;\n  grid-row-start: 1;\n  padding-top: 4em;\n}\n']
  ),
  _templateObject4 = _taggedTemplateLiteralLoose(
    ['\n&& {\n  grid-row-start: 2;\n}\n'],
    ['\n&& {\n  grid-row-start: 2;\n}\n']
  )

function _taggedTemplateLiteralLoose (strings, raw) {
  strings.raw = raw
  return strings
}

import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Image } from '../../../components'

import backgroundImage from './home-keyvisual.jpg'
import logoImage from './logo-white.svg'

var Wrapper = styled.div(_templateObject, backgroundImage)

var Content = styled.div(_templateObject2)

var Logo = styled(function (props) {
  return React.createElement(Image, props)
})(_templateObject3)

var LoginWrapper = styled.div(_templateObject4)

var LoginPage = function LoginPage (_ref) {
  var Login = _ref.Login
  return React.createElement(
    Wrapper,
    null,
    React.createElement(
      Helmet,
      null,
      React.createElement('title', null, 'Login Page'),
      React.createElement('meta', {
        name: 'description',
        content: 'Login page of Panorama application'
      })
    ),
    React.createElement(
      Content,
      null,
      React.createElement(Logo, { src: logoImage, alt: 'panorama logo' }),
      React.createElement(LoginWrapper, null, React.createElement(Login, null))
    )
  )
}

LoginPage.propTypes = {
  Login: PropTypes.func.isRequired
}

export default LoginPage
