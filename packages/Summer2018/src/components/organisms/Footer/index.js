import React from 'react'
import styled from 'styled-components'
import Button from '../../atoms/Button'
import ButtonGroup from '../../atoms/ButtonGroup'
import IconButton from '../../molecules/IconButton'

const StyledIconButton = styled(IconButton)`
  background: ${props => props.theme.palette.primary[0]};
  line-height: 2em;
`

const Footer = ({ links }) => (
  <ButtonGroup>
    {links.map(link => (
      <StyledIconButton
        fluid
        inverted
        key={`${link.to}-${link.icon}`}
        link={link}
      />
    ))}
  </ButtonGroup>
)

export default Footer
