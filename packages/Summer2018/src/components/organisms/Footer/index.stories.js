import React from "react";
import { storiesOf, addDecorator } from '@storybook/react'
import { action } from "@storybook/addon-actions";
import Component from ".";

const mockLinks = [
  { icon: 'home', to: '/home' },
  { icon: 'compass', to: '/' },
  { icon: 'frame', to: '/scan' },
  { icon: 'heart', to: '/' },
  { icon: 'user', to: '/' }
]

storiesOf("Footer", module)
  .add("default", () => (
    <Component links={mockLinks}></Component>
  ));
