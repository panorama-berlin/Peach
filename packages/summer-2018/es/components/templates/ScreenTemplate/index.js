var _templateObject = _taggedTemplateLiteralLoose(['\n&& {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  width: 100vw;\n  height: 90vh;\n  font-family: ', ';\n  font-size: 1em;\n\n  @media screen and (display-mode: standalone) {\n    height: 100vh;\n  }\n}\n'], ['\n&& {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  width: 100vw;\n  height: 90vh;\n  font-family: ', ';\n  font-size: 1em;\n\n  @media screen and (display-mode: standalone) {\n    height: 100vh;\n  }\n}\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n&& {\n  display: grid;\n  grid-row-start: 1;\n  align-items: start;\n}\n'], ['\n&& {\n  display: grid;\n  grid-row-start: 1;\n  align-items: start;\n}\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n&& {\n  display: grid;\n  grid-row-start: 2;\n  overflow: auto;\n}\n'], ['\n&& {\n  display: grid;\n  grid-row-start: 2;\n  overflow: auto;\n}\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n&& {\n  display: grid;\n  grid-row-start: 3;\n  align-items: end;\n}\n'], ['\n&& {\n  display: grid;\n  grid-row-start: 3;\n  align-items: end;\n}\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

var Wrapper = styled.div(_templateObject, function (props) {
  return props.theme.fonts.primary;
});

var HeaderWrapper = styled.div(_templateObject2);

var ContentWrapper = styled.div(_templateObject3);
var FooterWrapper = styled.div(_templateObject4);

var ScreenTemplate = function ScreenTemplate(_ref) {
  var Header = _ref.Header,
      children = _ref.children,
      Footer = _ref.Footer,
      props = _objectWithoutProperties(_ref, ['Header', 'children', 'Footer']);

  return React.createElement(
    Wrapper,
    props,
    Header && React.createElement(Header, null),
    React.createElement(
      ContentWrapper,
      null,
      React.createElement(
        'section',
        null,
        children
      )
    ),
    Footer && React.createElement(
      FooterWrapper,
      null,
      React.createElement(Footer, null)
    )
  );
};

ScreenTemplate.propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.any.isRequired
};

export default ScreenTemplate;