import {
  call,
  put,
  takeLeading,
  all,
  takeEvery
} from "redux-saga/effects";
import dataservice from "../services/dataservice";
import { GET_INVOICES_FULFILLED, GET_INVOICES_REJECTED, GET_INVOICES, ADD_INVOICE_FULFILLED, ADD_INVOICE_REJECTED, ADD_INVOICE } from "../ducks/invoice";
import { useHistory } from "react-router-dom";

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

function* addInvoice(invoice) {
  const addedInvoice = yield call(dataservice.addInvoice, invoice);
  try {
    yield put({
      type: ADD_INVOICE_FULFILLED,
      payload: addedInvoice
    });
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
      // const history = useHistory();
      yield* addInvoice(a.payload);
      // history.push("/");
    }),
  ])
}