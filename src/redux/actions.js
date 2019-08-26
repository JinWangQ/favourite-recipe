import {MODAL_ACTION} from "./actionTypes";
export const showModal = (modalProps, modalType) => ({
  type: MODAL_ACTION.SHOW_MODAL,
  payload: {modalProps, modalType}
});

export const hideModal = () => ({type: MODAL_ACTION.HIDE_MODAL});

// export const getACatFact = url => ({
//   type: GET_CAT_FACT,
//   payload: getData(url)
// });
