var _templateObject = _taggedTemplateLiteralLoose(
    [
      '\n&& {\n  grid-row-start: 2;\n  height: 80vh;\n  width: 100vw;\n  overflow: auto;\n}\n'
    ],
    [
      '\n&& {\n  grid-row-start: 2;\n  height: 80vh;\n  width: 100vw;\n  overflow: auto;\n}\n'
    ]
  ),
  _templateObject2 = _taggedTemplateLiteralLoose(
    [
      '\n&& {\n  width: 590px;\n  height: 800px;\n  overflow: auto;\n  max-width: inherit;\n}\n'
    ],
    [
      '\n&& {\n  width: 590px;\n  height: 800px;\n  overflow: auto;\n  max-width: inherit;\n}\n'
    ]
  )

function _taggedTemplateLiteralLoose (strings, raw) {
  strings.raw = raw
  return strings
}

import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import { ScreenTemplate, Header, Image } from '../../../components'

import mapImage from './germanyHigh.svg'

var Content = styled.section(_templateObject)

var MapImage = styled(function (props) {
  return React.createElement(Image, props)
})(_templateObject2)

var MapPage = function MapPage (_ref) {
  var Footer = _ref.Footer
  return React.createElement(
    ScreenTemplate,
    { Footer: Footer },
    React.createElement(
      Helmet,
      null,
      React.createElement('title', null, 'Map Page'),
      React.createElement('meta', {
        name: 'description',
        content: 'Map page of React.js Boilerplate application'
      })
    ),
    React.createElement(Header, null, 'Map Page'),
    React.createElement(
      Content,
      null,
      React.createElement(MapImage, { src: mapImage, alt: 'map' })
    )
  )
}

export default MapPage
