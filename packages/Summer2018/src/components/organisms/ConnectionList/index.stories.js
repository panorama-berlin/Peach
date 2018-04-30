import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ComponentMock from './mocks'

storiesOf('ConnectionList', module).add('default', () => <ComponentMock />)
