var _templateObject = _taggedTemplateLiteralLoose(
  [
    '\n&& {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n\n  .ui.buttons,\n  .button:last-child {\n    border-top-right-radius: inherit;\n    border-bottom-right-radius: inherit;\n  }\n\n  .ui.buttons,\n  .button:first-child {\n    border-top-left-radius: inherit;\n    border-bottom-left-radius: inherit;\n  }\n}\n'
  ],
  [
    '\n&& {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n\n  .ui.buttons,\n  .button:last-child {\n    border-top-right-radius: inherit;\n    border-bottom-right-radius: inherit;\n  }\n\n  .ui.buttons,\n  .button:first-child {\n    border-top-left-radius: inherit;\n    border-bottom-left-radius: inherit;\n  }\n}\n'
  ]
)

function _taggedTemplateLiteralLoose (strings, raw) {
  strings.raw = raw
  return strings
}

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'

var StyledButtonGroup = styled(function (props) {
  return React.createElement(Button.Group, props)
})(_templateObject)

export default StyledButtonGroup
