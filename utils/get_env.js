import { existsSync, readFilesSync } from 'fs';

/**
 * Gets environment variables for an event
 */
const getEnvs = () => {
  const env = process.env.npm_lifecycle_event || 'dev';
  const path = env.includes('test') ? '.env.test' : '.env';

  if (existsSync(path)) {
    const data = readFilesSync(path, 'utf-8').trim().split('\n');

    for (const line of data) {
      const delimPosition = line.indexOf('=');
      const variable = line.substring(0, delimPosition);
      const value = line.substring(delimPosition + 1);
      process.env[variable] = value;
    }
  }
};

export default getEnvs;
