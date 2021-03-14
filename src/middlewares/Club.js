import clubService from '../services/ClubServices';
import { failure } from '../utilities/response';

/**
 * ClubMiddleware class handles club middleware activities
 * @class ClubMiddleware
 */
export default class ClubMiddleware {
  /**
   * check if club exist
   * @method clubExist
   * @param {req} - request object
   * @param {res} - response object
   * @param {function} - next middleware function
   * @returns {object} Response
   */
  static async clubExist(req, res, next) {
    const { clubId } = req.body;
    const club = await clubService.getClubById(clubId);
    if (!club) return failure(404, 'club not found', res);
    req.club = club;
    return next();
  }

  /**
   * check if club belongs to user
   * @method clubBelongsToUser
   * @param {req} - request object
   * @param {res} - response object
   * @param {function} - next middleware function
   * @returns {object} Response
   */
  static async clubBelongsToUser(req, res, next) {
    const { token, club } = req;
    const { id } = token;
    const { adminId } = club;
    if (parseInt(id, 10) !== parseInt(adminId, 10)) {
      return failure(400, 'club does not belong to user', res);
    }
    return next();
  }
}
