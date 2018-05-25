import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import themes from '@panorama-berlin/themes';
import Component from '.';

var mockLinks = [{ icon: 'home', to: '/home' }, { icon: 'compass', to: '/' }, { icon: 'camera retro', to: '/scan' }, { icon: 'heart', to: '/' }, { icon: 'user', to: '/' }];

export var ComponentMock = function ComponentMock() {
  return React.createElement(
    BrowserRouter,
    null,
    React.createElement(
      ThemeProvider,
      { theme: themes.summer2018 },
      React.createElement(Component, { links: mockLinks })
    )
  );
};

export default ComponentMock;