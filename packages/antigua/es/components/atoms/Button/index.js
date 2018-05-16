var _templateObject = _taggedTemplateLiteralLoose(['\n&& {\n  width: 100%;\n\n  .ui.primary.button {\n    background-color: ', ';\n  }\n}\n'], ['\n&& {\n  width: 100%;\n\n  .ui.primary.button {\n    background-color: ', ';\n  }\n}\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button as SUButton } from 'semantic-ui-react';

var Wrapper = styled.span(_templateObject, function (props) {
  return props.children.props.primary ? props.theme.palette.primary[0] : 'inherit';
});

var Button = function Button(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  return React.createElement(
    Wrapper,
    { className: className },
    React.createElement(
      SUButton,
      props,
      children
    )
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Button;