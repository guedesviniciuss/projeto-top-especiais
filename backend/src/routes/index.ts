import { Router } from 'express';

import appointmentsRoutes from './appointments';

const router = Router();

router.use('/appointments', appointmentsRoutes);

export default router;