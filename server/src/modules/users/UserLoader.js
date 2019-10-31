import User from './UserModel';

import GitHubAuthService from '../../services/GitHubAuth';
import GitHubService from '../../services/GitHub';

export async function getAuthorizationURL() {
  const url = await GitHubAuthService.getAuthorizationURL();

  return url;
}

export async function getAccessToken(_, { code }) {
  const token = await GitHubAuthService.getAccessToken({ code });

  return token;
}

export async function getUser(_, { token }) {
  const githubUser = await GitHubService.getUser({ token });

  const { id: githubId, name, email } = githubUser;

  let user = await User.findOne({ githubId });

  if (!user) {
    user = await User.create({
      githubId,
      name,
      email
    });
  }

  return user;
}
