import { app } from './app';
import * as http from 'http';
import { MongoHelper } from './mongo-helper';
import mongoose from "mongoose";
import { MONGO_URL, PORT } from './constants';
 
const server = http.createServer(app);

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}
 
server.listen(PORT);
server.on('error', (err) => {
console.error(err);
});
server.on('listening', async () => {
  console.info(`Listening on port ${PORT}`);
  mongoose.connect(MONGO_URL, { useNewUrlParser: true });
  mongoose.connection.once('open', () => {
      console.info('Connected to Mongo via Mongoose');
  });
  mongoose.connection.on('error', (err) => {
      console.error('Unable to connect to Mongo via Mongoose', err);
  });
});