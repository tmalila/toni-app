import * as express from 'express';
import { InvoiceModel } from '../models/invoice';
import { MongooseDocument } from 'mongoose';
 
const invoiceRoutes = express.Router();
 
invoiceRoutes.get('/invoices', async (req: express.Request, resp: express.Response, next: express.NextFunction) => {
    InvoiceModel.find({}, (error: Error, invoices: MongooseDocument) => {
        if (error) {
          resp.send(error);
        }
        resp.json(invoices);
      });
});
 
invoiceRoutes.post('/invoice', async (req: express.Request, resp: express.Response, next: express.NextFunction) => {
    const newInvoice = new InvoiceModel(req.body);
    newInvoice.save((error: Error, invoice: MongooseDocument) => {
      if (error) {
        resp.status(400).send(error);
      }
      resp.json(invoice);
    });
});
 
invoiceRoutes.put('/invoice/:id', async (req: express.Request, resp: express.Response, next: express.NextFunction) => {
    const invoiceId = req.params.id;
    InvoiceModel.findByIdAndUpdate(
      invoiceId,
      req.body,
      (error: Error, invoice: any) => {
        if (error) {
          resp.send(error);
        }
        const message = invoice
          ? 'Updated successfully'
          : 'Invoice not found :(';
        resp.send(message);
      }
    );
});
 
invoiceRoutes.delete('/invoice/:id', async (req: express.Request, resp: express.Response, next: express.NextFunction) => {
    const invoiceId = req.params.id;
    InvoiceModel.findByIdAndDelete(invoiceId, (error: Error, deleted: any) => {
      if (error) {
        resp.send(error);
      }
      const message = deleted ? 'Deleted successfully' : 'Invoice not found :(';
      resp.send(message);
    });
});
 
export { invoiceRoutes }