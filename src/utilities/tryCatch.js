import { failure } from './response';
import logger from './logger';

export default method => async (req, res) => {
  try {
    return await method(req, res);
  } catch (error) {
    // eslint-disable-next-line no-console
    logger.error(`${error.message}`, error);
    return failure(503, 'Some error occurred', res);
  }
};
