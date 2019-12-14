import * as express from 'express';
import * as cors from 'cors';
import * as bodyparser from 'body-parser';
import { requestLoggerMiddleware } from './request-logger-middleware';

const app = express();
app.use(cors());
app.use(bodyparser.json());
 
// TODO - Add more middleware
app.use(requestLoggerMiddleware);

app.get('/todo', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(200);
  res.json([{id: 1, description: 'Buy Bread'}]);
  });
  app.post('/todo', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.info(`${JSON.stringify(req.body)}`);
  res.status(200);
  res.end();
  });
  app.put('/todo/:id', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.info(`${JSON.stringify(req.body)}`);
  console.info(`:id = ${req.params.id}`);
  res.status(200);
  res.end();
  });
  app.delete('/todo/:id', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.info(`:id = ${req.params.id}`);
  res.status(200);
  res.end();
  });

export { app }