import { Router } from 'express';
import { getUserInfo, getUserRepositories } from './user.controller';
import { user } from './user.validation';

const router = Router();

router.get('/:userHandle', [user.userHandle], getUserInfo);
router.get('/:userHandle/repos', [user.userHandle], getUserRepositories);

export default router;