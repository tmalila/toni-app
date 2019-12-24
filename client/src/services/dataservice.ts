import { InvoiceType } from './../components/Invoice';
import axios from "axios";

const API_URL = "http://localhost:9001";

export const getTodos = async () => {
  const ret = await axios.get(`${API_URL}/todos`);
  console.log("got the todos:", ret.data);
  return ret.data;
};

export const getInvoices = async () => {
  const ret = await axios.get(`${API_URL}/invoices`);
  console.log("got the invoices:", ret.data);
  return ret.data;
};

export const addInvoice = async (invoice: InvoiceType) => {
  const ret = await axios.post(`${API_URL}/invoice`, invoice);
  console.log("added invoice:", ret.data);
  return ret.data;
};

export default {
  getTodos,
  getInvoices,
  addInvoice
};
