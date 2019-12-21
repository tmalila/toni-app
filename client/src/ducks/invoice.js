import { List, Map } from "immutable";

const defaultState = Map();

export const GET_INVOICES = "GET_INVOICES";
export const GET_INVOICES_FULFILLED = "GET_INVOICES_FULFILLED";
export const GET_INVOICES_REJECTED = "GET_INVOICES_REJECTED";

export default function invoiceReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_INVOICES_FULFILLED:
      return Map(payload.map(p => [p._id, p]));

    default:
      return state;
  }
}