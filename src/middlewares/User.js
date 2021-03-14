import userService from '../services/UserService';
import { failure } from '../utilities/response';

/**
 * UserMiddleware class handles user middleware activities
 * @class UserMiddleware
 */
export default class UserMiddleware {
  /**
   * check if email and or username has been used
   * @method ifEmailOrUserNameUsedReturn
   * @param {req} - request object
   * @param {res} - response object
   * @param {function} - next middleware function
   * @returns {object} Response
   */
  static async ifEmailOrUserNameUsedReturn(req, res, next) {
    const { email, userName } = req.body;
    let user;
    user = await userService.getUserByEmail(email);
    if (user) {
      const email2 = user.email;
      if (email === email2)
        return failure(409, 'email has been used', res);
    } else {
      user = await userService.getUserByUserName(userName);
      if (user && user.userName === userName)
        return failure(409, 'userName has been used', res);
    }
    return next();
  }

  /**
   * check if invited user exist
   * @method ifInviteeDontExistReturn
   * @param {req} - request object
   * @param {res} - response object
   * @param {function} - next middleware function
   * @returns {object} Response
   */
  static async ifInviteeDontExistReturn(req, res, next) {
    const { inviteeId } = req.body;
    const user = await userService.getUserById(inviteeId);
    if (!user) {
      return failure(404, 'invitee not found', res);
    }
    return next();
  }
}
