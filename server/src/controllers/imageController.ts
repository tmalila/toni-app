import * as express from 'express';
import { InvoiceModel } from '../models/invoice';
import { MongooseDocument } from 'mongoose';
import multer from 'multer';
import { BlobClient, BlockBlobClient, BlockBlobUploadStreamOptions,  } from '@azure/storage-blob';
import { v4 as uuid } from 'uuid';
import * as intoStream from 'into-stream';
 
const imageRoutes = express.Router();
const uploadStrategy = multer({ storage: multer.memoryStorage() }).single('image');
const CONTAINER_NAME = "dev-toniapp-images";
 
// imageRoutes.get('/invoices', async (req: express.Request, resp: express.Response, next: express.NextFunction) => {
//     InvoiceModel.find({}, (error: Error, invoices: MongooseDocument) => {
//         if (error) {
//           resp.send(error);
//         }
//         resp.json(invoices);
//       });
// });
 
imageRoutes.post('/image/upload', uploadStrategy, async (req: express.Request, resp: express.Response, next: express.NextFunction) => {
  if(!req.file) {
    next("No file found in request.");
  }
  const newGuid: string = uuid();
  const blobName = newGuid + "_" + req.file.originalname;
  try {
    const azureConn = process.env.AZURE_STORAGE_CONNECTION_STRING as string;
    const blobClient = new BlockBlobClient(azureConn, CONTAINER_NAME, blobName);
    const fileStreamObj = intoStream.default(req.file.buffer);
    const contType = req.file.mimetype;
    const options: BlockBlobUploadStreamOptions = { blobHTTPHeaders: { blobContentType: contType} };
    const result = await blobClient.uploadStream(fileStreamObj, undefined, undefined, options);
    if(result.errorCode) {
      resp.json(result.errorCode.toString());
    }
    else {
      const responseObj = { blobName: blobName, file: req.file }
      resp.json(responseObj);
    }
  }
  catch(exception) {
    console.log("Threw exception: ", exception);
    next(exception);
  }
  
}); 
 
export { imageRoutes }