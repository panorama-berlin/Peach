import React from 'react'
import styled from "styled-components";
import Button from '../../atoms/Button'
import ButtonGroup from '../../atoms/ButtonGroup'
import IconButton from '../../molecules/IconButton'

const StyledButtonGroup = styled(ButtonGroup)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledIconButton = styled(IconButton)`
  background: ${props => props.theme.palette.primary[0]};
  line-height: 2em;
`;

const Footer = ({ links }) => (
  <StyledButtonGroup>
    {
      links.map(link => (<StyledIconButton inverted key={`${link.to}-${link.icon}`} link={link} />))
    }
  </StyledButtonGroup>
)

export default Footer
