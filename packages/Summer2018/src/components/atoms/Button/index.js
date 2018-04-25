import React from 'react'
import PropTypes from 'prop-types'
import { Button as SUButton } from 'semantic-ui-react'

const Button = ({ className, children, ...props }) => (
  <SUButton className={className} {...props}>{children}</SUButton>
)

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Button
