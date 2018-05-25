import React from 'react'
import PropTypes from 'prop-types'
import Dropdown from '../../atoms/Dropdown'
import { FormattedMessage } from 'react-intl'
import messages from './messages'

const LanguageDropdown = ({ options, onLocaleSelected }) => (
  <Dropdown
    button
    className='icon'
    floating
    labeled
    icon='world'
    options={options}
    onChange={(e, { value }) => onLocaleSelected(value)}
    search
    text={<FormattedMessage {...messages.text} />}
    closeOnBlur
    closeOnChange
  />
)

LanguageDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  )
}

LanguageDropdown.defaultProps = {
  options: []
}

export default LanguageDropdown
