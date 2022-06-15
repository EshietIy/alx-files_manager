import getEnvs from '../utils/get_env';

/**
 * starts the given express server
 * @param {express.Express} api the server to start
 */
const startServer = (api) => {
  getEnvs();
  const port = process.env.PORT || 5000;
  const env = process.env.npm_lifecycle_event || 'dev';

  api.listen(port, () => {
    console.log(`[${env}] API has started listening at port:${port}`);
  });
};

export default startServer;
