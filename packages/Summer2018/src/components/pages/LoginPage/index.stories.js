import React from "react";
import { storiesOf } from '@storybook/react'
import { action } from "@storybook/addon-actions";
import Component from ".";
import { Login } from "../../../components";

const LoginMock = () => <Login onLogIn={() => {}} isLoggingIn={false} />

storiesOf("LoginPage", module)
  .add("default", () => (
    <Component Login={LoginMock} />
  ));
