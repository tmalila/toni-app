import React, { useCallback, useEffect } from "react";
import AddInvoiceForm from "./AddInvoiceForm";
import { InvoiceType } from "./Invoice";
import { useSelector, useDispatch } from "react-redux";
import { ADD_INVOICE } from "../ducks/invoice";

interface Props{};

const AddInvoicePage: React.FunctionComponent<Props> = props => {
  const dispatch = useDispatch();

  const addInvoice = useCallback(
    (invoice: InvoiceType) => {
      dispatch({
        type: ADD_INVOICE,
        payload: invoice
      });
    },
    [dispatch]
  );

  return(
    <div>
      hello is AddInvoicePage!
      <AddInvoiceForm addInvoice={addInvoice}></AddInvoiceForm>
    </div>
  );
}

export default AddInvoicePage;