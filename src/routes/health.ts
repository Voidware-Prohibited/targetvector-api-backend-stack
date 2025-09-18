import { Router } from 'express';
import type { Request, Response } from 'express';
import { orm } from '../index.ts';

const router : Router  = Router();

router.get('/', async (req: Request, res: Response) => {
    const em = orm.em;
    try {
        // Attempt a simple query to check connection health
        await orm.em.getConnection().execute('SELECT 1');
        res.status(200).json({ status: 'Database connection healthy' });
    } catch (error: any) {
        console.error('Database connection error:', error);
        res.status(500).json({ status: 'Database connection unhealthy', error: error.message });
    }
});

export default router;