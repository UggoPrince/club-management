import userService from '../services/UserService';
import { failure } from '../utilities/response';

/**
 * UserMiddleware class handles user middleware activities
 * @class UserMiddleware
 */
export default class UserMiddleware {
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
}
