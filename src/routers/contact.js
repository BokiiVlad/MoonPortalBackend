import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { sendContactController } from '../controllers/contact.js';



const router = Router();

router.post('/', ctrlWrapper(sendContactController))

export default router;

