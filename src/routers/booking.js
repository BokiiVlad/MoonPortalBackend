import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { sendBookingController } from "../controllers/booking.js"


const router = Router();

router.post('/', ctrlWrapper(sendBookingController))

export default router;
