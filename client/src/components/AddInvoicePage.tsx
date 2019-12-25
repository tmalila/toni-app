import React, { useCallback, useEffect } from "react";
import AddInvoiceForm from "./AddInvoiceForm";
import { InvoiceType } from "./Invoice";
import { useSelector, useDispatch } from "react-redux";
import { ADD_INVOICE } from "../ducks/invoice";
import { useHistory } from "react-router-dom";

interface Props{};

const AddInvoicePage: React.FunctionComponent<Props> = props => {
  const dispatch = useDispatch();
  const history = useHistory();

  const addInvoice = useCallback(
    (invoice: InvoiceType) => {
      dispatch({
        type: ADD_INVOICE,
        payload: invoice,
        history: history
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