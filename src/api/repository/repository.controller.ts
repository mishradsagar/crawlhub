import { NextFunction, Request, Response } from "express";
import * as repositoryService from '../repository/repository.service'


export const getRepositoryInfo = async (req: Request, res: Response, next: NextFunction) => {
  const { ownerName } = req.params;
  console.log(ownerName)

  await repositoryService.getRepositoryInfo(ownerName);
}