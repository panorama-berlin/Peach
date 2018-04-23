import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100vw;
  height: 90vh;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1em;

  @media screen and (display-mode: standalone) {
    height: 100vh;
  }
`;

const HeaderWrapper = styled.div`
  display: grid;
  grid-row-start: 1;
  align-items: start;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-row-start: 2;
  overflow:auto;
`
const FooterWrapper = styled.div`
  display: grid;
  grid-row-start: 3;
  align-items: end;
`

const ScreenTemplate = ({ Header, children, Footer, ...props }) => (
  <Wrapper {...props}>
    {Header && <Header />}
    <ContentWrapper><section>{children}</section></ContentWrapper>
    {Footer && <FooterWrapper><Footer /></FooterWrapper>}
  </Wrapper>
);

ScreenTemplate.propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.any.isRequired
};

export default ScreenTemplate;
