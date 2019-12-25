import {
  call,
  put,
  takeLeading,
  all,
  takeEvery
} from "redux-saga/effects";
import dataservice from "../services/dataservice";
import { GET_INVOICES_FULFILLED, GET_INVOICES_REJECTED, GET_INVOICES, ADD_INVOICE_FULFILLED, ADD_INVOICE_REJECTED, ADD_INVOICE } from "../ducks/invoice";

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

function* addInvoice(invoice, history) {
  const addedInvoice = yield call(dataservice.addInvoice, invoice);
  try {
    yield put({
      type: ADD_INVOICE_FULFILLED,
      payload: addedInvoice,
    });
    yield call(history.push, "/");
  } catch (e) {
    yield put({
      type: ADD_INVOICE_REJECTED,
      payload: e,
      error: true
    });
  }
}

export default function* rootSaga() {

  yield all([
    takeLeading(GET_INVOICES, getInvoices),
    takeEvery(ADD_INVOICE, function*(a) {
      yield* addInvoice(a.payload, a.history);
    }),
  ])
}