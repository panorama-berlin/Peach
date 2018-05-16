import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Component from '.';
import { Footer } from '../../../components';

var mockLinks = [{ icon: 'home', to: '/home' }, { icon: 'compass', to: '/' }, { icon: 'camera retro', to: '/scan' }, { icon: 'heart', to: '/' }, { icon: 'user', to: '/' }];

var FooterMock = function FooterMock() {
  return React.createElement(Footer, { links: mockLinks });
};

storiesOf('HomePage', module).add('default', function () {
  return React.createElement(Component, { Footer: FooterMock });
});