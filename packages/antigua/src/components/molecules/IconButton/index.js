import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'

const StyledLink = styled(Link)`
  color: inherit;
`

const IconButton = ({ className, link, inverted, fluid }) => {
  const isLink = link.to !== undefined
  return (
    <Button className={className} fluid={fluid} icon>
      {isLink && (
        <StyledLink to={link.to}>
          <Icon size='big' inverted={inverted} name={link.icon} />
        </StyledLink>
      )}
      {!isLink && <Icon size='big' inverted={inverted} name={link.icon} />}
    </Button>
  )
}

IconButton.defaultProps = {
  inverted: false,
  fluid: false
}

IconButton.propTypes = {
  link: PropTypes.object.isRequired,
  inverted: PropTypes.bool,
  fluid: PropTypes.bool
}

export default IconButton
