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
    if (prevProps.modalProps.open !== this.props.modalProps.open) {
      console.log(this.props.modalProps);
    }
  };

  handleClose = () => {
    this.props.hideModal();
  };

  render() {
    if (!this.props.modalType) {
      return null;
    }
    const SpecifiedModal = MODAL_TYPES[this.props.modalType];
    return (
      <ReactModal
        isOpen={this.props.modalProps.open}
        className="Modal_Content"
        overlayClassName="Modal_Overlay"
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
