import React from 'react'
import { action } from '@storybook/addon-actions'
import Component from '.'

const languageOptions = [{ key: 'Arabic', text: 'Arabic', value: 'Arabic' }]

export const ComponentMock = () => (
  <Component
    options={languageOptions}
    onLocaleSelected={action(`localeSelected`)}
  />
)

export default ComponentMock
