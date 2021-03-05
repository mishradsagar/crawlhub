import { Router } from 'express';
import user from '../api/user/user.route';

const router = Router();

router.use('/users', user);

export default router;