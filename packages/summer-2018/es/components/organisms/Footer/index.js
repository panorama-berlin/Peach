var _templateObject = _taggedTemplateLiteralLoose(
  [
    '\n&& {\n  background: ',
    ';\n  line-height: 2em;\n\n  .ui.button {\n    background: inherit;\n  }\n}\n'
  ],
  [
    '\n&& {\n  background: ',
    ';\n  line-height: 2em;\n\n  .ui.button {\n    background: inherit;\n  }\n}\n'
  ]
)

function _taggedTemplateLiteralLoose (strings, raw) {
  strings.raw = raw
  return strings
}

import React from 'react'
import styled from 'styled-components'
import Button from '../../atoms/Button'
import ButtonGroup from '../../atoms/ButtonGroup'
import IconButton from '../../molecules/IconButton'

var StyledIconButton = styled(function (props) {
  return React.createElement(IconButton, props)
})(_templateObject, function (props) {
  return props.theme.palette.primary[0]
})

var Footer = function Footer (_ref) {
  var links = _ref.links
  return React.createElement(
    ButtonGroup,
    null,
    links.map(function (link) {
      return React.createElement(StyledIconButton, {
        fluid: true,
        inverted: true,
        key: link.to + '-' + link.icon,
        link: link
      })
    })
  )
}

export default Footer
