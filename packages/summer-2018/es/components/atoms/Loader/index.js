import React from 'react'
import PropTypes from 'prop-types'
import { Loader as SULoader } from 'semantic-ui-react'

var Loader = function Loader (_ref) {
  var className = _ref.className,
    children = _ref.children,
    inverted = _ref.inverted
  return React.createElement(
    SULoader,
    { className: className, inverted: inverted },
    children
  )
}

Loader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  inverted: PropTypes.bool
}

export default Loader
