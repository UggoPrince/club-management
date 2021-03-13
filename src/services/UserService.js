import { User } from '../database/models';

/**
 * UserService class handles user database activities
 * @class UserService
 */
export default class UserService {
  /**
   * creates a new user.
   * @async
   * @method saveUser
   * @param {object} body - all fields needed for a user
   * @returns {object} Response
   */
  static async saveUser(body) {
    const user = await User.create(body).then(result => {
      if (result) return result.dataValues;
      return result;
    });
    return user;
  }

  /**
   * get a user.
   * @async
   * @method getUser
   * @param {object} options
   * @returns {object} Response
   */
  static async getUser(options) {
    const user = await User.findOne(options).then(result => {
      if (result) return result.dataValues;
      return result;
    });
    return user;
  }

  /**
   * get a user by email.
   * @async
   * @method getUserByEmail
   * @param {string} email
   * @returns {object} Response
   */
  static async getUserByEmail(email) {
    const options = { where: { email } };
    const user = await UserService.getUser(options);
    return user;
  }

  /**
   * get a user by their username.
   * @async
   * @method getUserByUserName
   * @param {string} email
   * @returns {object} Response
   */
  static async getUserByUserName(userName) {
    const options = { where: { userName } };
    const user = await UserService.getUser(options);
    return user;
  }
}
