import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import IconButton from "../../molecules/IconButton"

const footerHeight = '2em'

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${props => props.theme.palette.primary[0]};
  font-size: 2em;
  color: white;
`;

const Footer = ({ className, links }) => (
  <Wrapper className={className}>
    {
      links.map(link => (<IconButton key={`${link.to}-${link.icon}`} link={link} />))
    }
  </Wrapper>
);

Footer.propTypes = {
  links: PropTypes.array.isRequired
};

export default Footer;
