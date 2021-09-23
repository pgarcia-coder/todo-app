import { Controller } from '../common/controller.interface';
import {
  ListTasksDto,
  CreateTaskDto,
  UpdateTaskDto,
  GetTaskDto,
  DeleteTaskDto,
} from './task.dtos';
import { Task } from './task.interface';
import tasksService from './tasks.service';

const listTasks: Controller<ListTasksDto, Task[]> = async (params) => {
  return tasksService.findAll(params);
};

const getTask: Controller<GetTaskDto, Task | null> = async (params) => {
  return tasksService.findById(params);
};

const createTask: Controller<CreateTaskDto, Task> = async (params) => {
  return tasksService.save(params);
};

const updateTask: Controller<UpdateTaskDto, Task | null> = async (params) => {
  return tasksService.update(params);
};

const deleteTask: Controller<DeleteTaskDto, Task | null> = async (params) => {
  return tasksService.deleteById(params);
};

export = { listTasks, createTask, updateTask, getTask, deleteTask };
