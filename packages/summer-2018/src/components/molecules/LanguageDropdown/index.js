import React from 'react'
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

export default LanguageDropdown
