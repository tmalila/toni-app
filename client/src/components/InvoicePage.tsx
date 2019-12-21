import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import InvoiceList from "./InvoiceList";
import { InvoiceType } from "./Invoice";
import { List } from "immutable";
import { useDispatch, useSelector } from "react-redux";
import { GET_INVOICES } from "../ducks/invoice";

interface Props {
};

const InvoicePage: React.FunctionComponent<Props> = props => {

  const dispatch = useDispatch();
  const invoices: List<InvoiceType> = useSelector((state: any) => state.invoice.toList());
  
  useEffect(() => {
    dispatch({
      type: GET_INVOICES
    });
  }, [dispatch]);


  return(
    <div
      css={theme => ({
        width: "100%",
        padding: "1rem",
        color: theme.colors.text,
      })}
    >
      <InvoiceList invoices={invoices}></InvoiceList>
    </div>
  );
}

export default InvoicePage;