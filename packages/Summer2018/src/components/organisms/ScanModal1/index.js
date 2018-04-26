import React, { Component } from 'react'

import Button from '../../atoms/Button'
import Header from '../../atoms/Header'
import Image from '../../atoms/Image'
import Modal from '../../atoms/Modal'
import ModalContent from '../../atoms/ModalContent'
import ModalDescription from '../../atoms/ModalDescription'
import ModalActions from '../../atoms/ModalActions'

class ScanModal extends Component {
  state = { open: false }

  static getDerivedStateFromProps(nextProps, prevState) {
    return nextProps.scanData !== undefined ?
      { ...prevState, open: true } :
      null
  }

  close = () => this.setState({ open: false })
  confirm = (result) => {
    this.props.onConfirm(result)
    this.close()
  }

  render() {
    const { open } = this.state

    return (
      <Modal dimmer='blurring' open={open} onClose={() => this.confirm(false)}>
        <ModalContent>
          <ModalDescription>
            <Header>Pending Exhibitor Connection</Header>
            <p>We've seen that you've just scanned an Exhibitor's QR code.</p>
            <p>Would you like to connect with: { this.props.scanData } ?</p>
          </ModalDescription>
        </ModalContent>
        <ModalActions>
          <Button color='black' onClick={() => this.confirm(false)}>
            Nope
          </Button>
          <Button positive icon='checkmark' labelPosition='right' content="Yep, connect!" onClick={() => this.confirm(true)} />
        </ModalActions>
      </Modal>
    )
  }
}

export default ScanModal
