import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getScheduleController } from '../controllers/schedule.js';

const router = Router()

router.get('/', ctrlWrapper(getScheduleController));

export default router;
