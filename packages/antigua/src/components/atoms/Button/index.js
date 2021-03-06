import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button as SUButton } from 'semantic-ui-react'

const Wrapper = styled.span`
  width: 100%;

  .ui.primary.button {
    background-color: ${props =>
    props.children.props.primary
      ? props.theme.palette.primary[0]
      : 'inherit'};
  }
`

const Button = ({ className, children, ...props }) => (
  <Wrapper className={className}>
    <SUButton {...props}>{children}</SUButton>
  </Wrapper>
)

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Button
