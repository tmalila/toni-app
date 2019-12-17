import * as express from 'express';
import { TodoModel } from '../models/todo';
import { MongooseDocument } from 'mongoose';
 
const todoRoutes = express.Router();
 
// todoRoutes.get('/todo', async (req: express.Request, resp: express.Response, next: express.NextFunction) => {
//     try {
//         let items: any = await TodoModel.find({});
//         items = items.map((item) => { return {id: item._id, description: item.description}});
//         resp.json(items);
//     } catch (err) {
//         resp.status(500);
//         resp.end();
//         console.error('Caught error', err);
//     }
// });

todoRoutes.get('/todos', async (req: express.Request, resp: express.Response, next: express.NextFunction) => {
    TodoModel.find({}, (error: Error, todos: MongooseDocument) => {
        if (error) {
          resp.send(error);
        }
        resp.json(todos);
      });
});
 
todoRoutes.post('/todo', async (req: express.Request, resp: express.Response, next: express.NextFunction) => {
    const newTodo = new TodoModel(req.body);
    newTodo.save((error: Error, todo: MongooseDocument) => {
      if (error) {
        resp.send(error);
      }
      resp.json(todo);
    });
});
 
todoRoutes.put('/todo/:id', async (req: express.Request, resp: express.Response, next: express.NextFunction) => {
    const todoId = req.params.id;
    TodoModel.findByIdAndUpdate(
        todoId,
      req.body,
      (error: Error, todo: any) => {
        if (error) {
          resp.send(error);
        }
        const message = todo
          ? 'Updated successfully'
          : 'TODO not found :(';
        resp.send(message);
      }
    );
});
 
todoRoutes.delete('/todo/:id', async (req: express.Request, resp: express.Response, next: express.NextFunction) => {
    const todoId = req.params.id;
    TodoModel.findByIdAndDelete(todoId, (error: Error, deleted: any) => {
      if (error) {
        resp.send(error);
      }
      const message = deleted ? 'Deleted successfully' : 'TODO not found :(';
      resp.send(message);
    });
});
 
export { todoRoutes }