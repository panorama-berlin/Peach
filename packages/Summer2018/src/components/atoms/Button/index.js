import React from 'react'
import { Button as SUButton } from 'semantic-ui-react'

const Button = ({ className, children, ...props }) => (
  <SUButton className={className} {...props}>{children}</SUButton>
)

export default Button
