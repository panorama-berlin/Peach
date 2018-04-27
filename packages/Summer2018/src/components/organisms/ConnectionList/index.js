import React from 'react'
import Segment from '../../atoms/Segment'
import Header from '../../atoms/Header'
import CardGroup from '../../atoms/CardGroup'

const toCardGroupItem = (connection) => ({
  header: `Exhibitor: ${connection.profileId}`,
  description: 'Some exhibitor info here',
  meta: `${connection.profileType}`
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
