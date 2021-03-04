import config from '../../config'

export const getRepositoryInfo = async (ownerName) => {
  const route = `https://api.github.com/users/${ownerName}/repos`;
  const options = {
    method: 'GET',
    headers: new Headers({
      'client_id': config.get('github.clientId'),
      'client_secret': config.get('github.clientSecret')
    })
  }
  const result = await fetch(route, options);
  return result;
}