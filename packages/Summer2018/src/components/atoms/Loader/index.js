import React from 'react'
import PropTypes from 'prop-types'
import { Loader as SULoader } from 'semantic-ui-react'

const Loader = ({ className, children, inverted }) => (
  <SULoader
    className={className}
    inverted={inverted}
  >
    {children}
  </SULoader>
)

Loader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  inverted: PropTypes.bool
}

export default Loader
