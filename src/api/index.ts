import { Router } from 'express';
import user from '../api/user/user.route';
import repository from '../api/repository/repository.route';


const router = Router();

router.use('/v1/users', user);
router.use('/v1/repositories', repository)

export default router;