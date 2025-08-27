import { Router } from 'express';
import type { Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]);
});

router.get('/users/:id', (req: Request, res: Response) => {
    const userId = req.params.id;
    res.json({ id: userId, name: `User ${userId}` });
});

export default router;