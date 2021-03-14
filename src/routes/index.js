import { Router } from 'express';
import authRoute from './auth';
import clubRoute from './club';
import authMiddleware from '../middlewares/Auth';

const router = Router();

router.use('/auth', authRoute); // user signup and login
router.use('/club', authMiddleware.authenticate, clubRoute); // club

export default router;
