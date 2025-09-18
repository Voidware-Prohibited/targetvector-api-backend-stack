import { Router } from 'express';
import status from './status.ts';
import health from './health.ts';
import data from './data.ts';
import replay from './replay.ts';
import users from './users.ts';

const router : Router  = Router();

router.use('/status', status);
router.use('/health', health);
router.use('/users', users);
router.use('/data', data);
router.use('/replay', replay);

export default router;