import React from "react";
import { storiesOf, addDecorator } from '@storybook/react'
import { action } from "@storybook/addon-actions";
import Component from ".";

const activeConnections = [
  {
    profileId: 6,
    profileType: 'Brand'
  }
];

const pendingConnections = [
  {
    profileId: 8,
    profileType: 'Brand'
  },
  {
    profileId: 7,
    profileType: 'Brand'
  }
];

storiesOf("ConnectionList", module)
  .add("default", () => (
    <Component activeConnections={activeConnections} pendingConnections={pendingConnections} />
  ));
