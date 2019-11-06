import { GraphQLNonNull, GraphQLString } from 'graphql';

import { getBearerToken, getUser } from './UserLoader';
import UserType from './UserType';

export const queries = {
  getBearerToken: {
    type: GraphQLNonNull(GraphQLString),
    args: {
      githubCode: { type: GraphQLString }
    },
    resolve: getBearerToken
  },
  getUser: {
    type: UserType,
    resolve: getUser
  }
};

export const mutations = {};
