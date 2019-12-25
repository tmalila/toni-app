import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import InvoiceList from "./InvoiceList";
import { InvoiceType } from "./Invoice";
import { List } from "immutable";
import { useDispatch, useSelector } from "react-redux";
import { GET_INVOICES } from "../ducks/invoice";
import { Link, useHistory } from "react-router-dom";

interface Props {
};

const InvoicePage: React.FunctionComponent<Props> = props => {

  const dispatch = useDispatch();
  const invoices: List<InvoiceType> = useSelector((state: any) => state.invoice.toList());
  const history = useHistory();
  
  useEffect(() => {
    dispatch({
      type: GET_INVOICES
    });
  }, [dispatch]);

  const navigateToNewInvoice = () => {
    history.push("/addinvoice")
  }

  return(
    <div
      css={theme => ({
        width: "100%",
        padding: "1rem",
        color: theme.colors.text,
      })}
    >
      <InvoiceList invoices={invoices}></InvoiceList>
      <button onClick={() => navigateToNewInvoice()}>
        New Invoice
      </button>
    </div>
  );
}

export default InvoicePage;