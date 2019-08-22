import {MODAL_ACTION} from "../actionTypes";

const initialState = {
  modalType: null,
  modalProps: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MODAL_ACTION.SHOW_MODAL: {
      const {modalProps, modalType} = action.payload;
      return {
        modalProps,
        modalType,
        type: MODAL_ACTION.SHOW_MODAL
      };
    }
    case MODAL_ACTION.HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
}
