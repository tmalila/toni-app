import { List, Map } from "immutable";

const defaultState = Map();

export const GET_INVOICES = "GET_INVOICES";
export const GET_INVOICES_FULFILLED = "GET_INVOICES_FULFILLED";
export const GET_INVOICES_REJECTED = "GET_INVOICES_REJECTED";

export const ADD_INVOICE = "ADD_INVOICE";
export const ADD_INVOICE_FULFILLED = "ADD_INVOICE_FULFILLED";
export const ADD_INVOICE_REJECTED = "ADD_INVOICE_REJECTED";

export const ADD_IMAGE = "ADD_IMAGE";
export const ADD_IMAGE_FULFILLED = "ADD_IMAGE_FULFILLED";
export const ADD_IMAGE_REJECTED = "ADD_IMAGE_REJECTED";

export default function invoiceReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_INVOICES_FULFILLED:
      return Map(payload.map(p => [p._id, p]));

    case ADD_INVOICE:
      return state.set(payload._id, p => {
        return {
          ...p,
          isLoading: true
        };
      });

    case ADD_INVOICE_FULFILLED:
      state.delete("-1"); // Delete now useless AddNewInvoice from state
      return state.set(payload.id, payload);

    case ADD_INVOICE_REJECTED:
      console.log("API Returned: ", payload.response);
      alert("Invoice was not added succesfully");

    case ADD_IMAGE:
      return state.set("-1", p => {
        return {
          ...p,
          isLoading: true
        };
      });

    case ADD_IMAGE_FULFILLED:
      return state.set("-1", p => {
        return {
          ...p,
          imageBlobName: p.blobName,
          isLoading: false,
        };
      });

    case ADD_IMAGE_REJECTED:
      console.log("API Returned: ", payload.response);
      alert("Image was not added succesfully");

    default:
      return state;
  }
}