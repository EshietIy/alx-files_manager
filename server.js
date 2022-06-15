import express from 'express';
import startServer from './libs/startserver';
import addRoutes from './routes';
import addMiddlewares from './libs/middlewares';

const server = express();

addMiddlewares(server);
addRoutes(server);
startServer(server);

export default server;
