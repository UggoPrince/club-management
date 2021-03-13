import { Router } from 'express';
import tryCatch from '../utilities/tryCatch';
import signupValidation from '../validations/signupValidation';
import userMiddleware from '../middlewares/User';
import auth from '../controllers/Auth';

const router = Router();

router.post(
  '/signup',
  signupValidation,
  userMiddleware.ifEmailOrUserNameUsedReturn,
  tryCatch(auth.signup),
);

export default router;
