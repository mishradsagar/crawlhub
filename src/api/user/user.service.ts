import { GithubClient } from '../../lib/github';
import config from '../../config';
import User from './user.dto';
import userModel from './user.model';

const githubClient = new GithubClient();

export const getUserRepositories = async (userHandle) => {
  return await githubClient.getUserRepos(userHandle);;
};

export const getUserInfo = async (userHandle): Promise<User> => {
  let userInfo: User = await userModel.findOne({ login: userHandle });

  if (userInfo) {
    return userInfo;
  } else {
    const userInfo = await githubClient.getUserInfo(userHandle);
    const user = await userModel.create(userInfo);
    return user;
  }
};
