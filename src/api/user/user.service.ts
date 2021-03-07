import fetch from "node-fetch";
import { RestClient } from "../../lib/restClient";
import config from "../../config";
import User from "./user.dto";
import userModel from "./user.model";

export const getUserRepositories = async (userHandle) => {
  const restClient = new RestClient("https://api.github.com", {
    method: "GET",
    headers: {
      client_id: config.get("github.clientId"),
      client_secret: config.get("github.clientSecret"),
    },
  });

  const {  body } = await restClient.callGet(`/users/${userHandle}/repos`);
  return body;
};

export const getUserInfo = async (userHandle): Promise<User> => {
  let userInfo: User = await userModel.findOne({ login: userHandle });

  if (userInfo) {
    return userInfo;
  } else {
    const restClient = new RestClient("https://api.github.com", {
      method: "GET",
      headers: {
        client_id: config.get("github.clientId"),
        client_secret: config.get("github.clientSecret"),
      },
    });
    
    const {  body } = await restClient.callGet(`/users/${userHandle}`);
    const user = await userModel.create(body);
    return user;
  }
};
