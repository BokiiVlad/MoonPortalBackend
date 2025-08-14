import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { setBookingController } from '../controllers/booking.js';


const router = Router();

router.post('/', ctrlWrapper(setBookingController))

export default router;
