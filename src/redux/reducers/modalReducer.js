import {MODAL_ACTION, GET_CAT_FACT} from "../actionTypes";

const initialState = {
  modalType: null,
  modalProps: {},
  cats: null
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
    case GET_CAT_FACT: {
      console.log(action.payload);
      return {
        type: GET_CAT_FACT,
        cats: action.payload
      };
    }
    default:
      return state;
  }
}
