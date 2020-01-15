import * as express from 'express';
import { InvoiceModel } from '../models/invoice';
import { MongooseDocument } from 'mongoose';
import multer from 'multer';
import { BlobClient, BlockBlobClient } from '@azure/storage-blob';
import { v4 } from 'uuid';
import * as intoStream from 'into-stream';
 
const imageRoutes = express.Router();
const AZURE_STORAGE_CONNECTION_STRING: string = process.env.AZURE_STORAGE_CONNECTION_STRING || "";
const uploadStrategy = multer({ storage: multer.memoryStorage() }).single('image');
const CONTAINER_NAME = "images";
 
// imageRoutes.get('/invoices', async (req: express.Request, resp: express.Response, next: express.NextFunction) => {
//     InvoiceModel.find({}, (error: Error, invoices: MongooseDocument) => {
//         if (error) {
//           resp.send(error);
//         }
//         resp.json(invoices);
//       });
// });
 
imageRoutes.post('/image/upload', uploadStrategy, async (req: express.Request, resp: express.Response, next: express.NextFunction) => {
  const blobName = req.file.originalname + v4.toString();
  const blobClient = new BlockBlobClient(AZURE_STORAGE_CONNECTION_STRING, CONTAINER_NAME, "blobName");
  const fileStreamObj = intoStream.object(req.file);
  blobClient.uploadStream(fileStreamObj, req.file.size);
}); 
 
export { imageRoutes }