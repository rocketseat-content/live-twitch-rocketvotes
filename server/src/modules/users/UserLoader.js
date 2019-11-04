import jwt from 'jsonwebtoken';

import User from './UserModel';

import GitHubAuthService from '../../services/GitHubAuth';
import GitHubService from '../../services/GitHub';
import authConfig from '../../config/auth';

export async function getAuthorizationURL() {
  const url = await GitHubAuthService.getAuthorizationURL();

  return url;
}

export async function getBearerToken(_, { githubCode }) {
  const { access_token: githubToken } = await GitHubAuthService.getAccessToken({
    code: githubCode
  });
  const githubUser = await GitHubService.getUser({ token: githubToken });
  const { id: githubId, name, email } = githubUser;

  let user = await User.findOne({ githubId });

  if (!user) {
    user = await User.create({
      githubId,
      name,
      email
    });
  }

  return jwt.sign({ githubId: user.githubId }, authConfig.secret, {
    expiresIn: authConfig.expiresIn
  });
}

export async function getUser(_, __, context) {
  const { githubId } = context;
  if (!githubId) throw new Error('You must be logged in to request user data!');

  const user = await User.findOne({ githubId });

  return user;
}
