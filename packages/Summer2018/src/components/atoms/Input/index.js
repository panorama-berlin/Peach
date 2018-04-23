import React from 'react'
import { Input as SUInput } from 'semantic-ui-react'

const Input = ({ className, ...props }) => (
  <SUInput className={className} {...props} />
)

export default Input
