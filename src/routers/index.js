import { Router } from 'express';
import bookingsRoutes from './booking.js';
import scheduleRouter from './schedule.js';

const router = Router();

router.use('/bookings', bookingsRoutes);
router.use('/schedule', scheduleRouter);

export default router;
