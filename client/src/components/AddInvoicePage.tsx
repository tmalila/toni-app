import React, { useCallback, useEffect } from "react";
import AddInvoiceForm from "./AddInvoiceForm";
import { InvoiceType } from "./Invoice";
import { useSelector, useDispatch } from "react-redux";
import { ADD_INVOICE } from "../ducks/invoice";
import { useHistory } from "react-router-dom";
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

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
    <div
    css={theme => ({
      width: "100%",
      padding: "1rem",
      color: theme.colors.text,
    })}
    >
      <h3>
        Add new invoice
      </h3>
      <AddInvoiceForm addInvoice={addInvoice}></AddInvoiceForm>
    </div>
  );
}

export default AddInvoicePage;