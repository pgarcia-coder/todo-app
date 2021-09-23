import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import healthRouter from './health/health.route';
import tasksRouter from './tasks/tasks.route';
import errorHandler from './middleware/error-handler';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/health', healthRouter);
app.use('/tasks', tasksRouter);

app.use(errorHandler);

export = app;
