import axios from 'axios';

import githubConfig from '../config/github';

class GitHubService {
  constructor() {
    this.github = axios.create({
      baseURL: githubConfig.apiURL
    });
  }

  async getUser({ token }) {
    const response = await this.github.get('/user', {
      headers: {
        Authorization: `token ${token}`
      }
    });

    return response.data;
  }
}

export default new GitHubService();
