import { Router } from 'express';
import clubMiddleware from '../middlewares/Club';
import inviteMiddleware from '../middlewares/Invite';
import userMiddleware from '../middlewares/User';
import tryCatch from '../utilities/tryCatch';
import sendInviteValidation from '../validations/sendInvite';
import invite from '../controllers/Invite';

const router = Router();

router.post(
  '/',
  sendInviteValidation,
  userMiddleware.ifInviteeDontExistReturn,
  clubMiddleware.clubExist,
  clubMiddleware.clubBelongsToUser,
  inviteMiddleware.ifInviteExistReturn,
  tryCatch(invite.sendInvite),
);

export default router;
