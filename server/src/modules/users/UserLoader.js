import { AuthenticationError } from 'apollo-server';
import jwt from 'jsonwebtoken';

import User from './UserModel';

import GitHubAuthService from '../../services/GitHubAuth';
import GitHubService from '../../services/GitHub';
import authConfig from '../../config/auth';

export async function getBearerToken(_, { githubCode }) {
  const { access_token: githubToken } = await GitHubAuthService.getAccessToken({
    code: githubCode
  });
  console.log({ githubCode });
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

  return jwt.sign({ githubId }, authConfig.secret, {
    expiresIn: authConfig.expiresIn
  });
}

export async function getUser(_, __, context) {
  const { githubId } = context;
  if (!githubId)
    throw new AuthenticationError(
      'You must be logged in to request user data!'
    );

  const user = await User.findOne({ githubId });

  return user;
}
