import { Router } from 'express';
import { getUserInfo, getUserRepositories } from './user.controller';

const router = Router();

router.get('/:userHandle', getUserInfo);
router.get('/:userHandle/repos', getUserRepositories);

export default router;