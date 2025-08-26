import { Router } from 'express';
import data from './data';
import users from './users';

const router = Router();

router.use('/users', users);
router.use('/data', data);

export default router;