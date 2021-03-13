import bcrypt from 'bcryptjs';

/**
 * Bcrypter class handles hashing of string
 * @class Bcrypter
 */
export default class Bcrypter {
  /**
   * hashes a password.
   * @method
   * @param {string} passwordToHash - a string that's to hashed
   * @returns {string} - hashed password
   */
  static async hashPassword(passwordToHash) {
    const hash = await bcrypt.hash(passwordToHash, 10);
    return hash;
  }

  /**
   * compares a password.
   * @method
   * @param {string} sentPassword - user password
   * @param {string} dbPassword - password from database
   * @returns {boolean} - hashed password
   */
  static comparePassword(sentPassword, dbPassword) {
    return bcrypt.compareSync(sentPassword, dbPassword);
  }
}
