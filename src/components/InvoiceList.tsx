import React, { FunctionComponent } from "react";
import Invoice, { InvoiceType } from "./Invoice";

interface Props {
  invoices: Array<InvoiceType>;
};

const InvoiceList: FunctionComponent<Props> = props => {
  const {invoices} = props;

  if (invoices.length === 0) {
    return null;
  }

  return(
    <>
    <p>Avoimet laskut</p>
    <div>
    {invoices.map((invoice: InvoiceType) => (
      <Invoice invoice={invoice} key={invoice.id}></Invoice>
    ))}
    </div>
    </>
  )
}

export default InvoiceList;