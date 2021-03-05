import fetch from 'node-fetch';
import config from '../../config';

export const getUserRepositories = async (userHandle) => {
  const route = `https://api.github.com/users/${userHandle}/repos`;
  const options = {
    method: 'GET',
    headers: {
      'client_id': config.get('github.clientId'),
      'client_secret': config.get('github.clientSecret')
    }
  }
  const result = await fetch(route, options)
  return result.json();
}