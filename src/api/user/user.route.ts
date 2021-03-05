import { Router } from 'express';
import { getUserRepositories } from './user.controller';

const router = Router();

router.get('/:userHandle/repos', getUserRepositories);

export default router;