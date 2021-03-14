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
   * @param {object} body
   * @returns {object} Response
   */
  static async saveClub(body) {
    const club = await Club.create(body).then(result => {
      if (result) return result.dataValues;
      return result;
    });
    return club;
  }

  /**
   * get a club by id.
   * @async
   * @method getClubById
   * @param {integer} id
   * @returns {object} Response
   */
  static async getClubById(id) {
    const club = await Club.findByPk(id).then(result => {
      if (result) return result.dataValues;
      return result;
    });
    return club;
  }
}
