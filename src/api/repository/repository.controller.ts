import { NextFunction, Request, Response } from "express";
import repositoryService from '../repository/repository.service'


const getRepositoryInfo = async (req: Request, res: Response, next: NextFunction) => {
  const { ownerName } = req.query;

  await repositoryService.getRepositoryInfo(ownerName);
}