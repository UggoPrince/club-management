import inviteService from '../services/InviteServices';
import { success } from '../utilities/response';

/**
 * Invite class handles invite operations
 * @class invite
 */
export default class Invite {
  /**
   * send a new invite.
   * @async
   * @method sendInvite
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Response
   */
  static async sendInvite(req, res) {
    const { token, body } = req;
    const { inviteeId, clubId } = body;
    const { id } = token;
    const adminId = id;
    const iBody = { inviteeId, clubId, adminId };
    const invite = await inviteService.saveInvite(iBody);
    return success(res, 201, 'Invite successfully sent', invite);
  }
}
