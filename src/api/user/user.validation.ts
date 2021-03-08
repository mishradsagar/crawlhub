import { param } from 'express-validator';

export const user = {
  userHandle: param('userHandle').isString(),
}