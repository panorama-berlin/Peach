import React from 'react';
import Component from '.';

var options = [{
  key: 'Red',
  text: 'Red',
  value: 'Red'
}, {
  key: 'Blue',
  text: 'Blue',
  value: 'Blue'
}];

export var ComponentMock = function ComponentMock() {
  return React.createElement(Component, { options: options, text: 'Select Colour' });
};

export default ComponentMock;