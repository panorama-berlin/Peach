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

function _objectWithoutProperties (obj, keys) {
  var target = {}
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue
    target[i] = obj[i]
  }
  return target
}

import React from 'react'
import PropTypes from 'prop-types'
import { Icon as SUIcon } from 'semantic-ui-react'

var Icon = function Icon (_ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, ['className'])

  return React.createElement(SUIcon, _extends({ className: className }, props))
}

Icon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Icon
