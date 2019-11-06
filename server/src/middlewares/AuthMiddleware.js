import { AuthenticationError } from 'apollo-server';

import jwt from 'jsonwebtoken';

import authConfig from '../config/auth';

export default function authMiddleware({ req }) {
  const { authorization } = req.headers;
  if (!authorization) return {};

  const [, token] = authorization.split(' ');
  if (!token) return {};

  try {
    const data = jwt.verify(token, authConfig.secret);

    const { githubId } = data;
    return { githubId };
  } catch (_) {
    throw new AuthenticationError('Invalid access token');
  }
}
