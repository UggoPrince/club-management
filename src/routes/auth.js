import { Router } from 'express';
import tryCatch from '../utilities/tryCatch';
import signupValidation from '../validations/signup';
import loginValidation from '../validations/login';
import userMiddleware from '../middlewares/User';
import auth from '../controllers/Auth';

const router = Router();

router.post(
  '/signup',
  signupValidation,
  userMiddleware.ifEmailOrUserNameUsedReturn,
  tryCatch(auth.signup),
);

router.post('/login', loginValidation, tryCatch(auth.login));

export default router;
