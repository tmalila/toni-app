import React, { FunctionComponent } from "react";
import { InvoiceType } from "./Invoice";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import MaterialInput from "./MaterialInput";
import MaterialButton from "./MaterialButton";
import FileUpload from "./FileUpload";
import { useSelector } from "react-redux";

const schema = Yup.object().shape({
  title: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  sumTotal: Yup.number()
    .typeError("SumTotal must be a number")
    .required("Required")
    .positive("Sum must be greater than zero"),
  date: Yup.date()
    .required()
});



interface Props {
  addInvoice: (invoice: InvoiceType) => void;
}

const AddInvoiceForm: FunctionComponent<Props> = props => {
  const { addInvoice } = props;
  const newInvoice: InvoiceType = useSelector((state: any) => state.invoice.get("-1"));

  return(
    <div>
      <FileUpload></FileUpload>
      <Formik
        enableReinitialize
        validationSchema={schema}
        initialValues={{
          date: new Date().toISOString().split('T')[0],
          title: "",
          sumTotal: 0,
          _id: "-1",
          imageBlobName: newInvoice?.imageBlobName,
        }}
        onSubmit={values => {
          const newInvoice = {
            ...values,
            status: "Odottaa",
          };
          addInvoice(newInvoice);
        }}
      >
        {({ errors, isValid }) => {
          return (
            <Form>
                <Field as={MaterialInput} type="text" name="title" />
                {errors.title && (
                  <span style={{ color: "red" }}>{errors.title}</span>
                )}
                {/* <MaterialInput value="t" step="" type="text" name="test"></MaterialInput> */}
                {/* <ErrorMessage component="span" name="test" /> */}
                <Field as={MaterialInput} type="number" step="any" name="sumTotal" />
                {errors.sumTotal && (
                  <span style={{ color: "red" }}>{errors.sumTotal}</span>
                )}
                <label>Invoice Date</label>
                <Field type="date" name="date" />
                {errors.date && (
                  <span style={{ color: "red" }}>{errors.date}</span>
                )}
              <div>
                <p>Se blobname: {newInvoice?.imageBlobName}</p>
                <MaterialButton disabled={!isValid} type="submit">
                  Submit
                </MaterialButton>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default AddInvoiceForm;