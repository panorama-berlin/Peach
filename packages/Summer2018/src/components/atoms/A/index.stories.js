import React from "react";
import { storiesOf } from "@storybook/react";
import Component from ".";

storiesOf("A", module)
  .add("default", () => (
    <Component href="https://www.w3schools.com">hyperlink</Component>
  ));
