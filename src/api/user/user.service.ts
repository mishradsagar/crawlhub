import { GithubClient } from '../../lib/github';
import config from '../../config';
import User, { UserRepo } from './user.dto';
import userModel from './user.model';

const githubClient = new GithubClient();

export const getUserRepositories = async (userHandle): Promise<UserRepo[]> => {
  const repos = await githubClient.getUserRepos(userHandle);

  const result: UserRepo[] = [];

  for (const repo of repos) {
    result.push({
      name: repo.name,
      description: repo.description,
      ownerHandle: repo.owner.login,
      starsCount: repo.stargazers_count,
      repoLink: repo.url,
    });
  }

  return result;
};

export const getUserInfo = async (userHandle): Promise<User> => {
  let userInfo: User = await userModel.findOne({ login: userHandle });

  if (userInfo) {
    return userInfo;
  } else {
    userInfo = await githubClient.getUserInfo(userHandle);
    const user = await userModel.create(userInfo);
    return user;
  }
};