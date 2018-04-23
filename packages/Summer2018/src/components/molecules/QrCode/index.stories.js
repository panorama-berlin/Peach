import React from "react";
import { storiesOf, addDecorator } from '@storybook/react'
import { action } from "@storybook/addon-actions";
import Component from ".";

storiesOf("QrCode", module)
  .add("default", () => (
    <Component value={'asfgsdfasdf'} size={300}></Component>
  ));
