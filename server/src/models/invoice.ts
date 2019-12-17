import * as mongoose from "mongoose";
 
const InvoiceSchema = new mongoose.Schema({
    // _id: { type: String, required: true },
    title: { type: String, required: true },
    status: { type: String, required: true },
    date: { type: Date, default: Date.now },
    sumTotal: Number
});
 
const InvoiceModel = mongoose.model('Invoice', InvoiceSchema);
 
export { InvoiceModel }