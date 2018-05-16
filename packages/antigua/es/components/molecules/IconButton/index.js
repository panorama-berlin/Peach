var _templateObject = _taggedTemplateLiteralLoose(['\n&& {\n  color: inherit;\n}\n'], ['\n&& {\n  color: inherit;\n}\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';

var StyledLink = styled(Link)(_templateObject);

var IconButton = function IconButton(_ref) {
  var className = _ref.className,
      link = _ref.link,
      inverted = _ref.inverted,
      fluid = _ref.fluid;

  var isLink = link.to !== undefined;
  return React.createElement(
    Button,
    { className: className, fluid: fluid, icon: true },
    isLink && React.createElement(
      StyledLink,
      { to: link.to },
      React.createElement(Icon, { size: 'big', inverted: inverted, name: link.icon })
    ),
    !isLink && React.createElement(Icon, { size: 'big', inverted: inverted, name: link.icon })
  );
};

IconButton.defaultProps = {
  inverted: false,
  fluid: false
};

IconButton.propTypes = {
  link: PropTypes.object.isRequired,
  inverted: PropTypes.bool,
  fluid: PropTypes.bool
};

export default IconButton;