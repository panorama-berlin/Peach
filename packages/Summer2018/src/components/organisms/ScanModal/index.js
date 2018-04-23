import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import Modal from "../../molecules/Modal";

class ScanModal extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isOpen: false
    }
  }
  componentDidMount() {
    this.setState({
      isOpen: this.props.scanData !== undefined
    })
  }
  UNSAFE_componentWillReceiveProps(nextProps, prevState) {
    this.setState({
      isOpen: nextProps.scanData !== undefined
    })
  }
  onClose = (result) => {
    this.setState({
      isOpen: false
    })
    this.props.onConfirm(typeof(result) === typeof(true) ? result : false);
  }
  render() {
    return (
      <Modal
        onClose={this.onClose}
        isOpen={this.state.isOpen}
        closeable
        isConfirm
      >
        Would you like to connect with: { this.props.scanData } ?
      </Modal>
    );
  }
}

export default ScanModal;
