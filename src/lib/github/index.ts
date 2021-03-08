import User from '../../api/user/user.dto';
import config from '../../config';
import { RestClient } from '../restClient';

export class GithubClient {
    baseUrl: string;
    restClient: RestClient;

    constructor(baseUrl: string = 'https://api.github.com') {
        this.baseUrl = baseUrl;
        this.restClient = new RestClient(this.baseUrl, {
            headers: {
                client_id: config.get('github.clientId'),
                client_secret: config.get('github.clientSecret'),
            }
        })
    }

    async getUserInfo(userHandle: string): Promise<User> {
        const path = `/users/${userHandle}`;
        this.restClient.setOptions({ method: 'GET' });

        const { body } = await this.restClient.callGet(path);
        return body;
    }

    async getUserRepos(userHandle: string) {
        const path = `/users/${userHandle}/repos`;
        this.restClient.setOptions({ method: 'GET' });

        const { body } = await this.restClient.callGet(path);
        return body;
    }

    async searchRepositories(repoName: string) {
        const path = `/search/repositories?q=${encodeURIComponent(`${repoName} in:name`)}`
        this.restClient.setOptions({ method: 'GET' });

        const { body } = await this.restClient.callGet(path);
        return body.items;
    }
}