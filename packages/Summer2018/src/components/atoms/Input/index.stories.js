import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Component from ".";

storiesOf("Input", module)
  .add("default", () => (
    <Component type="submit" value="Submit"></Component>
  ));
