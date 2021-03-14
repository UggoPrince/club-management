import { Invite } from '../database/models';

/**
 * InviteService class handles invite database activities
 * @class InviteService
 */
export default class InviteService {
  /**
   * creates a new Invite.
   * @async
   * @method saveInvite
   * @param {object} body
   * @returns {object} Response
   */
  static async saveInvite(body) {
    const invite = await Invite.create(body).then(result => {
      if (result) return result.dataValues;
      return result;
    });
    return invite;
  }

  /**
   * get an Invite.
   * @async
   * @method getInvite
   * @param {object} options
   * @returns {object} Response
   */
  static async getInvite(options) {
    const invite = await Invite.findOne(options).then(result => {
      if (result) return result.dataValues;
      return result;
    });
    return invite;
  }

  /**
   * get Invite by clubId and inviteeId.
   * @async
   * @method getInviteByClubIdAndInviteeId
   * @param {integer} clubId
   * @param {integer} inviteeId
   * @returns {object} Response
   */
  static async getInviteByClubIdAndInviteeId(clubId, inviteeId) {
    const options = { where: { clubId, inviteeId } };
    const invite = await InviteService.getInvite(options);
    return invite;
  }
}
