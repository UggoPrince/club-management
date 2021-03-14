import clubService from '../services/ClubServices';
import { success } from '../utilities/response';

/**
 * Club class handles club operations
 * @class Club
 */
export default class Club {
  /**
   * create a new club.
   * @async
   * @method createClub
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Response
   */
  static async createClub(req, res) {
    const { token } = req;
    const { id } = token;
    const clubBody = req.body;
    clubBody.adminId = id;
    const club = await clubService.saveClub(clubBody);
    return success(res, 201, 'club successfully created', club);
  }
}
