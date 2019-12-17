import express, { Application } from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import { requestLoggerMiddleware } from './request-logger-middleware';
import { todoRoutes } from './controllers/todoController';
import { invoiceRoutes } from './controllers/invoiceController';

const app = express();
app.use(cors());
app.use(bodyparser.json({ limit: '50mb' }));
app.use(bodyparser.urlencoded({ limit: '50mb', extended: true }));
 
// TODO - Add more middleware

app.use(requestLoggerMiddleware);
app.use(todoRoutes);
app.use(invoiceRoutes);
 
export { app };