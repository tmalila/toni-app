import React from "react";
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import InvoiceList from "./InvoiceList";
import { InvoiceType } from "./Invoice";
import dataService from "../services/dataservice";

interface Props {

};

const todos = dataService.getTodos();

const invoices: InvoiceType[] = [
  {
    id: "1",
    date: new Date().toLocaleDateString(),
    status: "Valmis",
    title: "Lasku 1"
  },
  {
    id: "2",
    date: new Date().toLocaleDateString(),
    status: "Odottaa",
    title: "Lasku 2"
  },
  {
    id: "3",
    date: new Date().toLocaleDateString(),
    status: "Valmis",
    title: "Lasku 3"
  },
]

const InvoicePage: React.FunctionComponent<Props> = props => {

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