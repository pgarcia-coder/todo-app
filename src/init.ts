#!/usr/bin/env node

import app from './app';
import http, { Server } from 'http';
import config from './config';
import mongoose from 'mongoose';

const onError = (error: NodeJS.ErrnoException): void => {
  console.log(error);
};

const init = async () => {
  await mongoose.connect(
    `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`
  );

  app.set('port', config.port);

  const server: Server = http.createServer(app);

  server.listen(config.port);
  server.on('error', onError);
};

init()
  .then(() => console.log(`${config.name} listening on port ${config.port}`))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
