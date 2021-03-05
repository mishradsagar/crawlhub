import fetch from 'node-fetch';
import config from '../../config'
import User from './user.dto';
import userModel from './user.model'

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

export const getUserInfo = async (userHandle): Promise<User> => {
  let userInfo: User = await userModel.findOne({ login: userHandle });

  if (userInfo) {
    return userInfo;
  }
  else {
    const route = `https://api.github.com/users/${userHandle}`;
    const options = {
      method: 'GET',
      headers: {
        'client_id': config.get('github.clientId'),
        'client_secret': config.get('github.clientSecret')
      }
    }
    const response = await fetch(route, options);
    const result: User = await response.json();
    const user = await userModel.create(result);
    return user; 
  }
}