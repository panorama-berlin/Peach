import React from 'react'
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'

const StyledLink = styled(Link)`
  color: inherit;
`;

const IconButton = ({ className, link, inverted }) => {
  const isLink = link.to !== undefined;
  return (
    <Button className={className} icon>
      {
        isLink && (
          <StyledLink to={link.to}>
            <Icon size="big" inverted={inverted} name={link.icon} />
          </StyledLink>
        )
      }
      {
        !isLink && (
          <Button className={className} icon>
            <Icon size="big" inverted={inverted} name={link.icon} />
          </Button>
        )
      }
    </Button>
  )
}

IconButton.defaultProps = {
  inverted: false
};

IconButton.propTypes = {
  link: PropTypes.object.isRequired,
  inverted: PropTypes.bool
};

export default IconButton
