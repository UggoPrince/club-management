import { Club } from '../database/models';

/**
 * ClubService class handles club database activities
 * @class ClubService
 */
export default class ClubService {
  /**
   * creates a new club.
   * @async
   * @method saveClub
   * @param {object} body - all fields needed for a user
   * @returns {object} Response
   */
  static async saveClub(body) {
    const user = await Club.create(body).then(result => {
      if (result) return result.dataValues;
      return result;
    });
    return user;
  }
}
