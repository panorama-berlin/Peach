import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Component from '.'
import { Footer, LogoutButton, LogoutModal } from '../../../components'

var mockLinks = [
  { icon: 'home', to: '/home' },
  { icon: 'compass', to: '/' },
  { icon: 'camera retro', to: '/scan' },
  { icon: 'heart', to: '/' },
  { icon: 'user', to: '/' }
]

var FooterMock = function FooterMock () {
  return React.createElement(Footer, { links: mockLinks })
}

var LogoutMock = function LogoutMock () {
  return React.createElement(
    LogoutButton,
    { onLogOut: function onLogOut () {} },
    'Log Out'
  )
}

var LogoutModalMock = function LogoutModalMock () {
  return React.createElement(LogoutModal, {
    onConfirm: function onConfirm () {}
  })
}

var currentUser = {
  id: '123456789',
  name: 'John Smith',
  roles: ['VISITOR']
}

storiesOf('UserPage', module).add('default', function () {
  return React.createElement(Component, {
    Footer: FooterMock,
    Logout: LogoutMock,
    LogoutModal: LogoutModalMock,
    currentUser: currentUser
  })
})
