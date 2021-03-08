import { param } from 'express-validator';

export const repository = {
    repoName: param('repoName').isString(),
}