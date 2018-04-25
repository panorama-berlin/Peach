import React from 'react'
import PropTypes from 'prop-types'
import { Header as SUHeader } from 'semantic-ui-react'

const Header = ({ className, children, ...props }) => (
  <SUHeader className={className} {...props}>{children}</SUHeader>
)

Header.defaultProps = {
  size: 'huge'
};

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Header
