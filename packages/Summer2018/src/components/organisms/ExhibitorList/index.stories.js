import React from "react";
import { storiesOf, addDecorator } from '@storybook/react'
import { action } from "@storybook/addon-actions";
import Component from ".";

storiesOf("ExhibitorList", module)
  .add("default", () => (
    <Component />
  ));
