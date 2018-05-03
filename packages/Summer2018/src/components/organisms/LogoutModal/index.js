import React, { Component } from 'react'

import Button from '../../atoms/Button'
import Header from '../../atoms/Header'
import Image from '../../atoms/Image'
import Modal from '../../atoms/Modal'
import ModalContent from '../../atoms/ModalContent'
import ModalDescription from '../../atoms/ModalDescription'
import ModalActions from '../../atoms/ModalActions'
import LogoutButton from '../../molecules/LogoutButton'

class LogoutModal extends Component {
  state = { open: false }

  componentDidMount = () => {
    this._mounted = true
  }

  componentWillUnmount = () => {
    this._mounted = false
  }

  close = () => {
    if (this._mounted) this.setState({ open: false })
  }

  confirm = result => {
    this.props.onConfirm(result)
    this.close()
  }

  onLogOut = () => {
    this.setState({ open: true })
  }

  render () {
    const { open } = this.state

    return (
      <div>
        <LogoutButton onLogOut={this.onLogOut} />
        <Modal
          {...this.props}
          dimmer='blurring'
          open={open}
          onClose={() => this.confirm(false)}
        >
          <ModalContent>
            <ModalDescription>
              <Header>Hope to see you soon!</Header>
              <p>We do not detect an internet connection.</p>
              <p>
                You will not be able to log in again until you have a internet
                connection.
              </p>
              <p>Would you like to log out?</p>
            </ModalDescription>
          </ModalContent>
          <ModalActions>
            <Button
              color='black'
              content='Nope'
              onClick={() => this.confirm(false)}
            />
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content='Yep, log out!'
              onClick={() => this.confirm(true)}
            />
          </ModalActions>
        </Modal>
      </div>
    )
  }
}

export default LogoutModal
