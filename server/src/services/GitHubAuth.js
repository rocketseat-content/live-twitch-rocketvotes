import axios from 'axios';

import githubConfig from '../config/github';

const redirectURL = 'http://localhost:3000/authorized';
// const encodedRedirectURL = encodeURIComponent(redirectURL);

class GitHubAuthService {
  constructor() {
    this.github = axios.create({
      baseURL: githubConfig.authURL
    });
  }

  getAuthorizationURL() {
    return `${githubConfig.authURL}/authorize?scope=user:email&client_id=${githubConfig.clientId}&redirect_uri=${redirectURL}`;
  }

  async getAccessToken({ code }) {
    const response = await this.github.post(
      '/access_token',
      {},
      {
        data: {},
        params: {
          client_id: githubConfig.clientId,
          client_secret: githubConfig.clientSecret,
          code
        }
      }
    );

    return response.data;
  }
}

export default new GitHubAuthService();
