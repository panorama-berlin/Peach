import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Component from '.'
import {
  Footer,
  LogoutButton,
  LogoutModal,
  LanguageDropdown
} from '../../../components'
import MockLanguageDropdown from '../../molecules/LanguageDropdown/mocks'

const mockLinks = [
  { icon: 'home', to: '/home' },
  { icon: 'compass', to: '/' },
  { icon: 'camera retro', to: '/scan' },
  { icon: 'heart', to: '/' },
  { icon: 'user', to: '/' }
]

const FooterMock = () => <Footer links={mockLinks} />

const LogoutMock = () => (
  <LogoutButton onLogOut={() => {}}>Log Out</LogoutButton>
)

const LogoutModalMock = () => <LogoutModal onConfirm={() => {}} />

const currentUser = {
  id: '123456789',
  name: 'John Smith',
  roles: ['VISITOR']
}

storiesOf('UserPage', module).add('default', () => (
  <Component
    Footer={FooterMock}
    Logout={LogoutMock}
    LogoutModal={LogoutModalMock}
    LanguageDropdown={MockLanguageDropdown}
    currentUser={currentUser}
  />
))
