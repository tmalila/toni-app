import * as mongoose from "mongoose";
 
const TodoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    status: { type: String, required: true },
    title: { type: String, required: true },
    sumTotal: Number
});
 
const TodoModel = mongoose.model('Todo', TodoSchema);
 
export { TodoModel }