import React from 'react'
import PropTypes from 'prop-types'
import { Image as SUImage } from 'semantic-ui-react'

const Image = ({ className, src, alt, ...props }) => (
  <SUImage className={className} src={src} alt={alt} {...props} />
)

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired
}

export default Image
