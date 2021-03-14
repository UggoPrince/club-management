import { Router } from 'express';
import tryCatch from '../utilities/tryCatch';
import createClubValidation from '../validations/createClub';
import club from '../controllers/Club';

const router = Router();

router.post('/', createClubValidation, tryCatch(club.createClub));

export default router;
