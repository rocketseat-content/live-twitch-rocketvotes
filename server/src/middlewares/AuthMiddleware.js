import jwt from 'jsonwebtoken';

import authConfig from '../config/auth';

export default function authMiddleware({ req }) {
  const { authorization } = req.headers;
  if (!authorization) return {};

  const [, token] = authorization.split(' ');
  if (!token) return {};

  const data = jwt.verify(token, authConfig.secret);

  if (!data) throw new Error('Invalid access token');

  const { githubId } = data;
  return { githubId };
}
