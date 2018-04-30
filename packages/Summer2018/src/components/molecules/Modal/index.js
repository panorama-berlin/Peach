import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, injectGlobal } from 'styled-components'
import ReactModal from 'react-modal'
import IconButton from '../IconButton'
import Footer from '../../organisms/Footer'

injectGlobal`
  body.ReactModal__Body--open {
    overflow: hidden;
  }
`

const overlayStyles = css`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 9999;
  transition: opacity 250ms ease-in-out;
  opacity: 0;
  &[class*='after-open'] {
    opacity: 1;
  }
  &[class*='before-close'] {
    opacity: 0;
  }
`

const ModalBox = styled(ReactModal)`
  position: absolute;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  border-radius: 0.125em;
  top: calc(50% - 1rem);
  left: calc(50% - 1rem);
  right: auto;
  bottom: auto;
  margin: 1rem calc(-50% + 1rem) 1rem 1rem;
  transform: translate(-50%, 100%);
  transition: transform 250ms ease-in-out;
  outline: none;
  box-sizing: border-box;
  min-width: 320px;
  max-width: calc(640px - 1rem);
  max-height: calc(100% - 1rem);
  padding-top: ${({ hasHeader }) => (hasHeader ? 0 : '1rem')};
  @media screen and (max-width: 640px) {
    width: calc(100% - 1rem);
    min-width: 0;
  }
  &[class*='after-open'] {
    transform: translate(-50%, -50%);
  }
  &[class*='before-close'] {
    transform: translate(-50%, 100%);
  }
  background: #eee;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem;
  > *:first-child {
    flex: 1;
  }
`

const Content = styled.div`
  overflow: auto;
  padding: 0 1rem;
  margin-bottom: 1rem;
  color: black;
`

const StyledFooter = styled(Footer)`
  font-size: 4em;
  background-color: inherit;
  color: black;
  border-top-style: groove;
`

const StyledReactModal = styled(({ className, ...props }) => (
  <ModalBox overlayClassName={className} closeTimeoutMS={250} {...props} />
))`
  ${overlayStyles};
`

const Modal = ({
  children,
  title,
  closeable,
  onClose,
  isConfirm,
  ...props
}) => {
  const hasHeader = title || closeable
  const confirmLinks = [
    {
      icon: 'close',
      onClick: () => onClose(false)
    },
    {
      icon: 'plus',
      onClick: () => onClose(true)
    }
  ]
  return (
    <StyledReactModal
      contentLabel={title || 'Modal'}
      onRequestClose={onClose}
      hasHeader={hasHeader}
      ariaHideApp={false}
      {...props}
    >
      {hasHeader && (
        <Header>{closeable && <button onClick={onClose}>close</button>}</Header>
      )}
      <Content>{children}</Content>
      {isConfirm && <StyledFooter links={confirmLinks} />}
    </StyledReactModal>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  closeable: PropTypes.bool,
  reverse: PropTypes.bool,
  onClose: PropTypes.func.isRequired
}

export default Modal
