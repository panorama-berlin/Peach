var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Header as SUHeader } from 'semantic-ui-react';

var Header = function Header(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  return React.createElement(
    SUHeader,
    _extends({ className: className }, props),
    children
  );
};

Header.defaultProps = {
  size: 'huge'
};

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Header;