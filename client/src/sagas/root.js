import {
  call,
  put,
  takeLeading,
  all,
} from "redux-saga/effects";
import dataservice from "../services/dataservice";
import { GET_INVOICES_FULFILLED, GET_INVOICES_REJECTED, GET_INVOICES } from "../ducks/invoice";

function* getInvoices() {
  const invoices = yield call(dataservice.getInvoices);
  try {
    yield put({
      type: GET_INVOICES_FULFILLED,
      payload: invoices
    });
  } catch (e) {
    yield put({
      type: GET_INVOICES_REJECTED,
      payload: e,
      error: true
    });
  }
}

export default function* rootSaga() {
  yield all([
    takeLeading(GET_INVOICES, getInvoices),
  ])
}