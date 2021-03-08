import { NextFunction, Request, Response } from 'express';
import User from './user.dto';
import * as userService from './user.service';


export const getUserRepositories = async (req: Request, res: Response, next: NextFunction) => {
  const { userHandle } = req.params;

  try {
    const result = await userService.getUserRepositories(userHandle);
    return res.status(200).json(result);
  }
  catch (err) {
    next(err);
  }
}

export const getUserInfo = async (req: Request, res: Response, next: NextFunction) => {
  const { userHandle } = req.params;

  try {
    const result: User = await userService.getUserInfo(userHandle);
    return res.status(200).json(result);
  }
  catch (err) {
    next(err);
  }
}