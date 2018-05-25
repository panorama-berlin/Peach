import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Component from '.'
import Login from '../../organisms/Login/mocks'

storiesOf('LoginPage', module).add('default', () => <Component Login={Login} />)
