import { Router } from 'express';
import authRoute from './auth';
import clubRoute from './club';
import inviteRoute from './invite';
import authMiddleware from '../middlewares/Auth';

const router = Router();

router.use('/auth', authRoute); // user signup and login
router.use('/club', authMiddleware.authenticate, clubRoute); // club
router.use('/invite', authMiddleware.authenticate, inviteRoute); // invites

export default router;
