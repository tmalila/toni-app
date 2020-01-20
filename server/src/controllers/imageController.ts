import * as express from 'express';
import { InvoiceModel } from '../models/invoice';
import { MongooseDocument } from 'mongoose';
import multer from 'multer';
<<<<<<< HEAD
import { BlobClient, BlockBlobClient, BlockBlobUploadStreamOptions,  } from '@azure/storage-blob';
import { v4 as uuid } from 'uuid';
import * as intoStream from 'into-stream';
 
const imageRoutes = express.Router();
const uploadStrategy = multer({ storage: multer.memoryStorage() }).single('image');
const CONTAINER_NAME = "dev-toniapp-images";
=======
import { BlobClient, BlockBlobClient } from '@azure/storage-blob';
import { v4 } from 'uuid';
import * as intoStream from 'into-stream';
 
const imageRoutes = express.Router();
const AZURE_STORAGE_CONNECTION_STRING: string = process.env.AZURE_STORAGE_CONNECTION_STRING || "";
const uploadStrategy = multer({ storage: multer.memoryStorage() }).single('image');
const CONTAINER_NAME = "images";
>>>>>>> afca4f615d966b92aa650332843fa4c01a5dd36e
 
// imageRoutes.get('/invoices', async (req: express.Request, resp: express.Response, next: express.NextFunction) => {
//     InvoiceModel.find({}, (error: Error, invoices: MongooseDocument) => {
//         if (error) {
//           resp.send(error);
//         }
//         resp.json(invoices);
//       });
// });
 
imageRoutes.post('/image/upload', uploadStrategy, async (req: express.Request, resp: express.Response, next: express.NextFunction) => {
<<<<<<< HEAD
  const newGuid: string = uuid();
  const blobName = newGuid + "_" + req.file.originalname;
  try {
    const azureConn = process.env.AZURE_STORAGE_CONNECTION_STRING as string;
    const blobClient = new BlockBlobClient(azureConn, CONTAINER_NAME, blobName);
    const fileStreamObj = intoStream.default(req.file.buffer);
    const contType = req.file.mimetype;
    const options = { blobHTTPHeaders: { blobContentType: contType} } as BlockBlobUploadStreamOptions;
    const result = await blobClient.uploadStream(fileStreamObj, undefined, undefined, options);
    if(result.errorCode) {
      next(result._response.request);
    }
    else {
      resp.json(blobName);
    }
  }
  catch(exception) {
    console.log("Threw exception: ", exception);
    next(exception);
  }
  
=======
  const blobName = req.file.originalname + v4.toString();
  const blobClient = new BlockBlobClient(AZURE_STORAGE_CONNECTION_STRING, CONTAINER_NAME, "blobName");
  const fileStreamObj = intoStream.object(req.file);
  blobClient.uploadStream(fileStreamObj, req.file.size);
>>>>>>> afca4f615d966b92aa650332843fa4c01a5dd36e
}); 
 
export { imageRoutes }