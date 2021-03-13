import authService from '../services/AuthService';
import userService from '../services/UserService';
import { success } from '../utilities/response';

/**
 * Auth class handles authentications
 * @class Auth
 */
export default class Auth {
  /**
   * registers a new user.
   * @async
   * @method signup
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Response
   */
  static async signup(req, res) {
    const { body } = req;
    const user = await userService.saveUser(body);
    delete user.password;
    const token = await authService.encodeToken(user);
    return success(res, 201, 'user successfully created', {
      token,
      ...user,
    });
  }
}
