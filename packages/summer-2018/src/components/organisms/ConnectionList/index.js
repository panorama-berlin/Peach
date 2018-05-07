import React from 'react'
import Segment from '../../atoms/Segment'
import Header from '../../atoms/Header'
import CardGroup from '../../atoms/CardGroup'

const toCardGroupItem = connection => ({
  key: connection.id,
  header: `Exhibitor: ${connection.id}`,
  description: 'Some exhibitor info here',
  meta: `${connection.type}`
})

const ConnectionsList = ({ activeConnections, pendingConnections }) => (
  <div>
    <Segment>
      <Header size='medium'>Pending</Header>
      <CardGroup centered items={pendingConnections.map(toCardGroupItem)} />
    </Segment>
    <Segment>
      <Header size='medium'>Active</Header>
      <CardGroup centered items={activeConnections.map(toCardGroupItem)} />
    </Segment>
  </div>
)

export default ConnectionsList
