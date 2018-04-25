import React from "react";
import { storiesOf } from '@storybook/react'
import { action } from "@storybook/addon-actions";
import Component from ".";
import { Footer, ExhibitorList } from "../../../components";

const mockLinks = [
  { icon: 'home', to: '/home' },
  { icon: 'compass', to: '/' },
  { icon: 'camera retro', to: '/scan' },
  { icon: 'heart', to: '/' },
  { icon: 'user', to: '/' }
]

const FooterMock = () => <Footer links={mockLinks} />;

const ExhibitorListMock = () => <ExhibitorList />

storiesOf("ConnectionsPage", module)
  .add("default", () => (
    <Component Footer={FooterMock} ExhibitorList={ExhibitorListMock} />
  ));
