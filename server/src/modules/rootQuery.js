import { queries as topicQueries } from './topics';
import { queries as userQueries } from './users';

export default {
  ...topicQueries,
  ...userQueries
};
