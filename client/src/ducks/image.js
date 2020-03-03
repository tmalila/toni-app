import { List, Map } from "immutable";

const defaultState = Map();

export const ADD_IMAGE = "ADD_IMAGE";
export const ADD_IMAGE_FULFILLED = "ADD_IMAGE_FULFILLED";
export const ADD_IMAGE_REJECTED = "ADD_IMAGE_REJECTED";

export default function invoiceReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    // case ADD_IMAGE:
    //   return state.set(payload._id, p => {
    //     return {
    //       ...p,
    //       isLoading: true
    //     };
    //   });

    // case ADD_IMAGE_FULFILLED:
    //   return state.set(payload.id, p => {
    //     return {
    //       image: p.file,
    //       imageBlobName: p.blobName,
    //       isLoading: false,
    //     };
    //   });

    default:
      return state;
  }
}