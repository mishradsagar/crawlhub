import { Router } from 'express';
import { searchRepositories } from './repository.controller';

const router = Router();

router.get('/', searchRepositories);

export default router;
