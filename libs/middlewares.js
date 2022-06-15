import express from 'express';

/**
 * Adds middlewares to an express application
 * @param {express.Express} api the express app
 */
const addMiddlewares = (api) => {
  api.use(express.json({
    limit: '200mb',
  }));
};

export default addMiddlewares;
