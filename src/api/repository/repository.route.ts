import { Router } from 'express';
import { getRepositoryInfo } from './repository.controller';

const router = Router();

router.get('/:ownerName/repos', getRepositoryInfo);

export default router;