import axios from 'axios';

import githubConfig from '../config/github';

class GitHubAuthService {
  constructor() {
    this.github = axios.create({
      baseURL: githubConfig.authURL
    });
  }

  async getAccessToken({ code }) {
    const response = await this.github.post(
      '/access_token',
      {},
      {
        headers: {
          Accept: 'application/json'
        },
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
