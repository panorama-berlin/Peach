import React from 'react';
import { action } from '@storybook/addon-actions';
import Component from '.';

var languageOptions = [{ key: 'Arabic', text: 'Arabic', value: 'Arabic' }];

export var ComponentMock = function ComponentMock() {
  return React.createElement(Component, { options: languageOptions, onLocaleSelected: action('localeSelected') });
};

export default ComponentMock;