import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({ message: 'Data from backend!' });
});

export default router;