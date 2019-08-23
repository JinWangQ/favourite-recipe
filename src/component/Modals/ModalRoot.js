import React from "react";
import {connect} from "react-redux";
import ReactModal from "react-modal";
import {hideModal} from "../../redux/actions";
import {Recipe} from "./";

const MODAL_TYPES = {
  RECIPE: Recipe
};

const mapStateToProps = state => {
  const {modalProps, modalType} = state.modal;
  return {
    modalProps,
    modalType
  };
};
ReactModal.setAppElement("#root");
class ModalRoot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  componentDidUpdate = prevProps => {
    if (prevProps !== this.props) {
      this.setState({modalIsOpen: this.props.modalProps.open});
    }
  };

  handleClose = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  };

  render() {
    if (!this.props.modalType) return null;
    const SpecifiedModal = MODAL_TYPES[this.props.modalType];
    return (
      <ReactModal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.handleClose}
        className="Modal_Content"
        overlayClassName="Modal_Overlay"
        shouldCloseOnOverlayClick={true}
        closeTimeoutMS={500}
      >
        <SpecifiedModal
          closeModal={this.handleClose}
          {...this.props.modalProps}
        />
      </ReactModal>
    );
  }
}

export default connect(
  mapStateToProps,
  {hideModal}
)(ModalRoot);
