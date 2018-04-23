import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Component from ".";

storiesOf("H1", module)
  .add("default", () => (
    <Component>Header1</Component>
  ));
