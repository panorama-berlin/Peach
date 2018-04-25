import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Component from ".";
import Button from "../Button";

storiesOf("ButtonGroup", module)
  .add("default", () => (
    <Component>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </Component>
  ));
