import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import H1 from '.'

describe('Component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays a welcome message', () => {
    render(<H1>Welcome to React components</H1>, node, () => {
      expect(node.innerHTML).toContain('Welcome to React components')
    })
  })
})
