import validate from 'validate.js';
import { idRule } from './rules';
import { failure } from '../utilities/response';

export default (req, res, next) => {
  const { body } = req;
  const constraint = {
    ...idRule('inviteeId'),
    ...idRule('clubId'),
  };
  let validationError = validate(body, constraint);

  if (validationError === undefined) validationError = {};

  if (Object.keys(validationError).length > 0) {
    return failure(422, validationError, res);
  }
  return next();
};
