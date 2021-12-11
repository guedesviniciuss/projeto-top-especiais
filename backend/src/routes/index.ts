import { Router } from 'express';

import appointmentsRoutes from './appointments';
import doctorsRoutes from './doctors';

const router = Router();

router.use('/appointments', appointmentsRoutes);
router.use('/doctors', doctorsRoutes);

export default router;
