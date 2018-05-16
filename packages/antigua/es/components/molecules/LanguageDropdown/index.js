import React from 'react';
import Dropdown from '../../atoms/Dropdown';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

var LanguageDropdown = function LanguageDropdown(_ref) {
  var options = _ref.options,
      onLocaleSelected = _ref.onLocaleSelected;
  return React.createElement(Dropdown, {
    button: true,
    className: 'icon',
    floating: true,
    labeled: true,
    icon: 'world',
    options: options,
    onChange: function onChange(e, _ref2) {
      var value = _ref2.value;
      return onLocaleSelected(value);
    },
    search: true,
    text: React.createElement(FormattedMessage, messages.text),
    closeOnBlur: true,
    closeOnChange: true
  });
};

export default LanguageDropdown;