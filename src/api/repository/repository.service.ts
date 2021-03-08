import { GithubClient } from '../../lib/github';
import { UserRepo } from '../../api/user/user.dto';

const githubClient = new GithubClient();

export const searchRepositories = async (repoName): Promise<UserRepo[]> => {
  const repos = await githubClient.searchRepositories(repoName);

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