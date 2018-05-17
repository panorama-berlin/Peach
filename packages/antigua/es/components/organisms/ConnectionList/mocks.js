import React from 'react';
import Component from '.';

var activeConnections = [{
  id: '6',
  type: 'Brand',
  state: 'ACTIVE'
}];

var pendingConnections = [{
  id: '8',
  type: 'Brand',
  state: 'PENDING'
}, {
  id: '7',
  type: 'Brand',
  state: 'PENDING'
}];

export var ComponentMock = function ComponentMock() {
  return React.createElement(Component, {
    activeConnections: activeConnections,
    pendingConnections: pendingConnections
  });
};

export default ComponentMock;