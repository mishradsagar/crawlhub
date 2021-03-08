import { NextFunction, Request, Response } from 'express';
import * as userService from './repository.service';


export const searchRepositories = async (req: Request, res: Response, next: NextFunction) => {
  const { repoName } = req.query;

  try {
    const result = await userService.searchRepositories(repoName);
    return res.status(200).json(result);
  }
  catch (err) {
    next(err);
  }
}