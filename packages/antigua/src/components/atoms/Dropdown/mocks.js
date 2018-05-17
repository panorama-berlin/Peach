import React from 'react'
import Component from '.'

const options = [
  {
    key: 'Red',
    text: 'Red',
    value: 'Red'
  },
  {
    key: 'Blue',
    text: 'Blue',
    value: 'Blue'
  }
]

export const ComponentMock = () => (
  <Component options={options} text='Select Colour' />
)

export default ComponentMock
