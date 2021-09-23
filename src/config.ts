import { name } from '../package.json';

export = {
  name: name || 'Server',
  port: process.env.PORT || 3000,
  db: {
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || '27017',
    name: process.env.DB_NAME || 'todo_app',
  },
};
