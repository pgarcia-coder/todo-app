import {
  ListTasksDto,
  UpdateTaskDto,
  GetTaskDto,
  DeleteTaskDto,
  CreateTaskDto,
} from './task.dtos';
import { Task } from './task.interface';
import taskModel from './task.model';

const findAll = async (params: ListTasksDto): Promise<Task[]> => {
  const query = params.search
    ? {
        $or: [
          { title: { $regex: params.search } },
          { description: { $regex: params.search } },
        ],
      }
    : {};
  return taskModel.find(query);
};

const findById = async (params: GetTaskDto): Promise<Task | null> => {
  return taskModel.findById(params._id);
};

const save = async (params: CreateTaskDto): Promise<Task> => {
  return taskModel.create(params.body);
};

const update = async (params: UpdateTaskDto): Promise<Task | null> => {
  return taskModel.findByIdAndUpdate(params._id, params.body, {
    new: true,
  });
};

const deleteById = async (params: DeleteTaskDto): Promise<Task | null> => {
  return taskModel.findByIdAndDelete(params._id);
};

export = { findAll, save, update, findById, deleteById };
