import DataLoader from 'dataloader';
import User from './modules/users/UserModel';

const batchUsers = async ids => {
  const users = await User.findByIds(ids);

  const userMap = {};
  users.forEach(u => {
    userMap[u.id] = u;
  });

  return ids.map(id => userMap[id]);
};

export const userLoader = () => new DataLoader(batchUsers);
