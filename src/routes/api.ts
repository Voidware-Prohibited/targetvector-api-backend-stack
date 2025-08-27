import { Router } from 'express';
import status from './status.ts';
import health from './health.ts';
import data from './data.ts';
import users from './users.ts';

const router = Router();

router.use('/status', status);
router.use('/health', health);
router.use('/users', users);
router.use('/data', data);

export default router;