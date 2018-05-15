import React from 'react'
import Dropdown from '../../atoms/Dropdown'

const test = (e, { value }) => console.log('onChange', value)

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
    text='Select Language'
    closeOnBlur
    closeOnChange
  />
)

export default LanguageDropdown
