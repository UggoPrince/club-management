import authService from '../services/AuthService';
import userService from '../services/UserService';
import { failure, success } from '../utilities/response';

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

  /**
   * login user.
   * @async
   * @method login
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Response
   */
  static async login(req, res) {
    const { email, password } = req.body;
    const user = await userService.getUserByEmail(email);
    if (!user) {
      return failure(401, 'Incorrect email/password', res);
    }
    if (!userService.checkPassword(password, user.password)) {
      return failure(401, 'Incorrect email/password', res);
    }
    delete user.password;
    const token = await authService.encodeToken(user);
    return success(res, 200, 'Login successful', {
      token,
      ...user,
    });
  }
}
