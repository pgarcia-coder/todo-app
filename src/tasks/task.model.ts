import { Schema, model } from 'mongoose';
import { Task } from './task.interface';

export = model<Task>(
  'Task',
  new Schema({
    title: String,
    description: String,
  })
);
