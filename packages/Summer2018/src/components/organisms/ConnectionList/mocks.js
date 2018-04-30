import React from 'react'
import Component from '.'

const activeConnections = [
  {
    profileId: 6,
    profileType: 'Brand'
  }
]

const pendingConnections = [
  {
    profileId: 8,
    profileType: 'Brand'
  },
  {
    profileId: 7,
    profileType: 'Brand'
  }
]

export const ComponentMock = () => (
  <Component
    activeConnections={activeConnections}
    pendingConnections={pendingConnections}
  />
)

export default ComponentMock
