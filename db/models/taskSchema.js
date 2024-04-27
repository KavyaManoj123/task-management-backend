import { Schema, model } from 'mongoose';

const taskSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dueDate: {
    type: String,
  },
  status:{
    type:String,
    enum:['completed',"inprogress","todo"]
  },
  priority: {
    type: String,
    enum:['normal',"high","medium"]
  },
});

const Task = model('Task', taskSchema);

export default Task;
