import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import themes from '@panorama-berlin/themes'
import Component from '.'

const mockLinks = [
  { icon: 'home', to: '/home' },
  { icon: 'compass', to: '/' },
  { icon: 'camera retro', to: '/scan' },
  { icon: 'heart', to: '/' },
  { icon: 'user', to: '/' }
]

export const ComponentMock = () => (
  <BrowserRouter>
    <ThemeProvider theme={themes.summer2018}>
      <Component links={mockLinks} />
    </ThemeProvider>
  </BrowserRouter>
)

export default ComponentMock
