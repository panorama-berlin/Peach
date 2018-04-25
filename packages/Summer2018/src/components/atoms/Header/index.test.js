import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import Header from '.'

describe('Component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays a welcome message', () => {
    render(<Header>Welcome to React components</Header>, node, () => {
      expect(node.innerHTML).toContain('Welcome to React components')
    })
  })
})
