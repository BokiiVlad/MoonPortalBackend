import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { setContactController } from '../controllers/booking.js';


const router = Router();

router.post('/', ctrlWrapper(setContactController))

export default router;

