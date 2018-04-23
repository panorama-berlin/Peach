import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const footerHeight = '2em'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledLink = styled(Link)`
  flex-grow: 1;
  text-align: center;
  height: ${footerHeight};
  text-decoration: inherit;
  color: inherit;
`;

const StyledSpan = styled.span`
  flex-grow: 1;
  text-align: center;
  height: ${footerHeight};
  text-decoration: inherit;
`;

const Icon = styled.i`
  line-height: ${footerHeight};

  &&& {
    line-height: ${footerHeight};
  }
`;

const IconButton = ({ link, ...props }) => {
  const isLink = link.to !== undefined;
  return (
    <Wrapper {...props}>
      {
        isLink && (
          <StyledLink to={link.to} onClick={link.onClick ? link.onClick : () => {}}>
             <Icon className={`icon-${link.icon} icons`} />
          </StyledLink>
        )
      }
      {
        !isLink && (
          <StyledSpan onClick={link.onClick}>
             <Icon className={`icon-${link.icon} icons`} />
          </StyledSpan>
        )
      }
    </Wrapper>
  )
}

IconButton.propTypes = {
  link: PropTypes.object.isRequired
};

export default IconButton;
