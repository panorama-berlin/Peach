import React from 'react';
import Segment from '../../atoms/Segment';
import Header from '../../atoms/Header';
import CardGroup from '../../atoms/CardGroup';

var toCardGroupItem = function toCardGroupItem(connection) {
  return {
    key: connection.id,
    header: 'Exhibitor: ' + connection.id,
    description: 'Some exhibitor info here',
    meta: '' + connection.type
  };
};

var ConnectionsList = function ConnectionsList(_ref) {
  var activeConnections = _ref.activeConnections,
      pendingConnections = _ref.pendingConnections;
  return React.createElement(
    'div',
    null,
    React.createElement(
      Segment,
      null,
      React.createElement(
        Header,
        { size: 'medium' },
        'Pending'
      ),
      React.createElement(CardGroup, { centered: true, items: pendingConnections.map(toCardGroupItem) })
    ),
    React.createElement(
      Segment,
      null,
      React.createElement(
        Header,
        { size: 'medium' },
        'Active'
      ),
      React.createElement(CardGroup, { centered: true, items: activeConnections.map(toCardGroupItem) })
    )
  );
};

export default ConnectionsList;