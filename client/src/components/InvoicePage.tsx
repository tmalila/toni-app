import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import InvoiceList from "./InvoiceList";
import { InvoiceType } from "./Invoice";
import dataService from "../services/dataservice";

interface Props {

};

// const todos = dataService.getTodos();
// const invoices = await dataService.getInvoices();

// const invoices: InvoiceType[] = [
//   {
//     _id: "1",
//     date: new Date().toLocaleDateString(),
//     status: "Valmis",
//     title: "Lasku 1",
//     sumTotal: 123
//   },
//   {
//     _id: "2",
//     date: new Date().toLocaleDateString(),
//     status: "Odottaa",
//     title: "Lasku 2",
//     sumTotal: 221
//   },
//   {
//     _id: "3",
//     date: new Date().toLocaleDateString(),
//     status: "Valmis",
//     title: "Lasku 3",
//     sumTotal: 311
//   },
// ]

const InvoicePage: React.FunctionComponent<Props> = props => {

  const [invoices, setInvoices] = useState<Array<InvoiceType>>([]);

  useEffect(() => {
    dataService.getInvoices().then(invoiceArr => setInvoices((invoiceArr)));
  }, [])

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