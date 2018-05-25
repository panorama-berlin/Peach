import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Component from '.'
import { ScreenTemplate, LogoutButton, LogoutModal } from '../../../components'
import LanguageDropdown from '../../molecules/LanguageDropdown/mocks'
import Footer from '../../organisms/Footer/mocks'

const Logout = () => <LogoutButton onLogOut={() => {}}>Log Out</LogoutButton>

const MockLogoutModal = () => <LogoutModal onConfirm={() => {}} />

const currentUser = {
  id: '123456789',
  name: 'John Smith',
  roles: ['VISITOR']
}

storiesOf('UserPage', module).add('default', () => (
  <ScreenTemplate Footer={Footer}>
    <Component
      Logout={Logout}
      LogoutModal={MockLogoutModal}
      LanguageDropdown={LanguageDropdown}
      currentUser={currentUser}
    />
  </ScreenTemplate>
))
