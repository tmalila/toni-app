import { app } from './app';
import * as http from 'http';
import { MongoHelper } from './mongo-helper';
 
const PORT = 8888;
const server = http.createServer(app);
 
server.listen(PORT);
server.on('error', (err) => {
console.error(err);
});
server.on('listening', async () => {
  console.info(`Listening on port ${PORT}`);
  try {
    await MongoHelper.connect(`mongodb://10.0.0.129:27017/todo`);
    console.info(`Connected to Mongo!`);
  } catch (err) {
    console.error(`Unable to connect to Mongo!`, err);
  }
});