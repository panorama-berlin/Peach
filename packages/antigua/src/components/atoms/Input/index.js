import React from 'react'
import PropTypes from 'prop-types'
import { Input as SUInput } from 'semantic-ui-react'

const Input = ({ className, ...props }) => (
  <SUInput className={className} {...props} />
)

Input.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Input
