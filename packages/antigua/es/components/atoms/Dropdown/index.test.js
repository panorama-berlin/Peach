import React from 'react'
import renderer from 'react-test-renderer'
import ComponentMock from './mocks'

it('renders correctly', () => {
  const tree = renderer.create(<ComponentMock />).toJSON()
  expect(tree).toMatchSnapshot()
})
