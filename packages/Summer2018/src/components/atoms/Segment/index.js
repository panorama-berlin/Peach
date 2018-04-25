import React from 'react'
import PropTypes from 'prop-types'
import { Segment as SUSegment } from 'semantic-ui-react'

const Segment = ({ className, children, ...props }) => (
  <SUSegment className={className} {...props}>{children}</SUSegment>
)

Segment.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Segment
