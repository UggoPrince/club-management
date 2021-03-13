import { config } from 'dotenv';
import jwt from 'jsonwebtoken';

config();
const {
  env: { JWT_SECRET, TOKEN_TIME },
} = process;

/**
 * AuthService class handles authentication operations
 * @class AuthService
 */
export default class AuthService {
  /**
   * Encode object to a token string
   * @async
   * @method encodeToken
   * @param {object} object - Object to be encoded
   * @returns {string} token
   */
  static async encodeToken(object = {}) {
    const token = await jwt.sign(object, JWT_SECRET, {
      expiresIn: TOKEN_TIME,
    });
    return token;
  }
}
