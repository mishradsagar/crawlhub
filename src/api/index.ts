import { Router } from 'express';
import repository from '../api/repository/repository.route';
import user from '../api/user/user.route';

const router = Router();

router.use('/user', user);
router.use('/repository', repository);

export default router;