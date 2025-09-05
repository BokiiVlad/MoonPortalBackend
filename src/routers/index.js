import { Router } from 'express';
import bookingsRoutes from './booking.js';
import contactRouter from './contact.js';

const router = Router();

router.use('/bookings', bookingsRoutes);
router.use('/contact', contactRouter);

export default router;
