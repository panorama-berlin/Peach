var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Image as SUImage } from 'semantic-ui-react';

var Image = function Image(_ref) {
  var className = _ref.className,
      src = _ref.src,
      alt = _ref.alt,
      props = _objectWithoutProperties(_ref, ['className', 'src', 'alt']);

  return React.createElement(SUImage, _extends({ className: className, src: src, alt: alt }, props));
};

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired
};

export default Image;