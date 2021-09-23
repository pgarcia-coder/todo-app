import express from 'express';
import tasksController from '../tasks/tasks.controller';
import controllerHandler from '../middleware/controller-handler';
import { ListTasksDto, CreateTaskDto, UpdateTaskDto, GetTaskDto, DeleteTaskDto } from './task.dtos';

const router = express.Router();

// Keep routes in a single line
/* eslint function-call-argument-newline: ["error", "never"] */
/* eslint function-paren-newline: ["error", "never"] */

router.get('/', controllerHandler({ controller: tasksController.listTasks, type: ListTasksDto }));
router.get('/:_id', controllerHandler({ controller: tasksController.getTask, type: GetTaskDto }));
router.post('/', controllerHandler({ controller: tasksController.createTask, type: CreateTaskDto }));
router.put('/:_id', controllerHandler({ controller: tasksController.updateTask, type: UpdateTaskDto }));
router.delete('/:_id', controllerHandler({ controller: tasksController.deleteTask, type: DeleteTaskDto }));

export = router;
