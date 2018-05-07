import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Image } from '../../../components'

import backgroundImage from './home-keyvisual.jpg'
import logoImage from './logo-white.svg'

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: round;
  background-image: url(${backgroundImage});
`

const Content = styled.div`
  height: 100%;
  margin: auto 10%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr;
  grid-row-gap: 4em;
`

const Logo = styled(props => <Image {...props} />)`
  width: 100%;
  grid-row-start: 1;
  padding-top: 4em;
`

const LoginWrapper = styled.div`
  grid-row-start: 2;
`

const LoginPage = ({ Login }) => (
  <Wrapper>
    <Helmet>
      <title>Login Page</title>
      <meta name='description' content='Login page of Panorama application' />
    </Helmet>
    <Content>
      <Logo src={logoImage} alt='panorama logo' />
      <LoginWrapper>
        <Login />
      </LoginWrapper>
    </Content>
  </Wrapper>
)

LoginPage.propTypes = {
  Login: PropTypes.func.isRequired
}

export default LoginPage
