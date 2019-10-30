import { mutations as topicMutations } from './topics';
import { mutations as userMutations } from './users';

export default {
  ...topicMutations,
  ...userMutations
};
