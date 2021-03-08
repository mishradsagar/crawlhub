import { Router } from 'express';
import { searchRepositories } from './repository.controller';
import { repository } from './repository.validation';

const router = Router();

router.get('/', [repository.repoName], searchRepositories);

export default router;