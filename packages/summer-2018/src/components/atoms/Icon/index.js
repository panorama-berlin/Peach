import React from 'react'
import PropTypes from 'prop-types'
import { Icon as SUIcon } from 'semantic-ui-react'

const Icon = ({ className, ...props }) => (
  <SUIcon className={className} {...props} />
)

Icon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Icon
