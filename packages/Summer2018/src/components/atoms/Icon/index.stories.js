import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Component from ".";

storiesOf("Icon", module)
  .add("default", () => (
    <Component name="home" />
  ));
