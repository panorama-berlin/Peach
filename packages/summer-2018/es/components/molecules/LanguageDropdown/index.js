import React from 'react';
import Dropdown from '../../atoms/Dropdown';

var test = function test(e, _ref) {
  var value = _ref.value;
  return console.log('onChange', value);
};

var LanguageDropdown = function LanguageDropdown(_ref2) {
  var options = _ref2.options,
      onLocaleSelected = _ref2.onLocaleSelected;
  return React.createElement(Dropdown, {
    button: true,
    className: 'icon',
    floating: true,
    labeled: true,
    icon: 'world',
    options: options,
    onChange: function onChange(e, _ref3) {
      var value = _ref3.value;
      return onLocaleSelected(value);
    },
    search: true,
    text: 'Select Language',
    closeOnBlur: true,
    closeOnChange: true
  });
};

export default LanguageDropdown;