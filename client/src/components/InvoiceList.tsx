import React, { FunctionComponent } from "react";
import Invoice, { InvoiceType } from "./Invoice";
import { List } from "immutable";

interface Props {
  invoices: List<InvoiceType>;
};

const InvoiceList: FunctionComponent<Props> = props => {
  const {invoices} = props;

  if (invoices.count() === 0) {
    return null;
  }

  return(
    <>
    <p>Avoimet laskut</p>
    <div>
    {invoices.map((invoice: InvoiceType) => (
      <Invoice invoice={invoice} key={invoice._id}></Invoice>
    ))}
    </div>
    </>
  )
}

export default InvoiceList;