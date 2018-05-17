import React from 'react'
import Component from '.'

const activeConnections = [{
  id: '6',
  type: 'Brand',
  state: 'ACTIVE'
}]

const pendingConnections = [{
  id: '8',
  type: 'Brand',
  state: 'PENDING'
}, {
  id: '7',
  type: 'Brand',
  state: 'PENDING'
}]

export const ComponentMock = () => React.createElement(Component, {
  activeConnections: activeConnections,
  pendingConnections: pendingConnections
})

export default ComponentMock
