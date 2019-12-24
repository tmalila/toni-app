import React, { FunctionComponent } from "react";
import { InvoiceType } from "./Invoice";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import MaterialInput from "./MaterialInput";
import MaterialButton from "./MaterialButton";

const schema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  sumTotal: Yup.number()
    .required("Required"),
  date: Yup.date()
    .required()
});

interface Props {
  addInvoice: (invoice: InvoiceType) => void;
}

const AddInvoiceForm: FunctionComponent<Props> = props => {
  const { addInvoice } = props;

  return(
    <Formik
      validationSchema={schema}
      initialValues={{
        date: new Date().toISOString().split('T')[0],
        title: "",
        sumTotal: 0
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
            <div>
              <label htmlFor="title">Title</label>
              <Field as={MaterialInput} type="text" name="title" />
              {errors.title && (
                <span style={{ color: "red" }}>{errors.title}</span>
              )}
            </div>
            <div>
              <label>Sum Total</label>
              <Field as={MaterialInput} type="number" name="sumTotal" />
              {errors.sumTotal && (
                <span style={{ color: "red" }}>{errors.sumTotal}</span>
              )}
            </div>
            <div>
              <label>Invoice Date</label>
              <Field type="date" name="date" />
              {errors.date && (
                <span style={{ color: "red" }}>{errors.date}</span>
              )}
            </div>
            <div>
              <MaterialButton disabled={!isValid} type="submit">
                Submit
              </MaterialButton>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default AddInvoiceForm;