import { Router } from 'express';
import repository from './repository';
import user from './user';

const router = Router();

router.use('/user', user);
router.use('/repository', repository);

export default router;