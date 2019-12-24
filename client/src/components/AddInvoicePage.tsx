import React from "react";
import AddInvoiceForm from "./AddInvoiceForm";

interface Props{};

const addInvoice = () => {
  console.log("hello add invoice!!");
}

const AddInvoicePage: React.FunctionComponent<Props> = props => {

  return(
    <div>
      hello is AddInvoicePage!
      <AddInvoiceForm addInvoice={addInvoice}></AddInvoiceForm>
    </div>
  );
}

export default AddInvoicePage;