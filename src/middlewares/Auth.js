import authService from '../services/AuthService';
import { failure } from '../utilities/response';

/**
 * AuthMiddleware class handles auth middleware activities
 * @class UserMiddleware
 */
export default class AuthMiddleware {
  /**
   * authenticate user
   * @method
   * @param {req} - request object
   * @param {res} - response object
   * @param {function} - next middleware function
   * @returns {object} Response
   */
  static async authenticate(req, res, next) {
    const sentToken = req.get('Authorization');

    if (!sentToken) {
      return failure(
        401,
        'No Authorization header sent. Login and send a token.',
        res,
      );
    }

    const token = sentToken.slice(7, sentToken.length);
    const jwt = await authService.verifyToken(token);

    if (jwt.tokenExp) {
      return failure(
        401,
        'Session has expired, login to continue.',
        res,
      );
    }
    req.token = jwt.decode;
    return next();
  }
}
