import { failure } from '../utilities/response';
import inviteServices from '../services/InviteServices';

/**
 * InviteMiddleware class handles invite middleware activities
 * @class InviteMiddleware
 */
export default class InviteMiddleware {
  static async ifInviteExistReturn(req, res, next) {
    const { clubId, inviteeId } = req.body;
    const invite = await inviteServices.getInviteByClubIdAndInviteeId(
      clubId,
      inviteeId,
    );
    if (invite) return failure(409, 'invite already exist', res);
    return next();
  }
}
