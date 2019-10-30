import 'dotenv/config';

export default {
  clientId: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  authURL: 'https://github.com/login/oauth',
  apiURL: 'https://api.github.com'
};
