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

  /**
   * Decode sent token string
   * @async
   * @method verifyToken
   * @param {string} token - token to be decoded
   * @returns {object} decodedObject
   */
  static async verifyToken(sentToken) {
    const userToken = await jwt.verify(
      sentToken,
      JWT_SECRET,
      (err, decode) => {
        if (err) {
          return { tokenExp: true, error: err };
        }
        return { tokenExp: false, decode };
      },
    );
    return userToken;
  }
}
