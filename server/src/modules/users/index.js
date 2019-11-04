import { GraphQLNonNull, GraphQLString } from 'graphql';

import { getAuthorizationURL, getBearerToken, getUser } from './UserLoader';
import UserType from './UserType';

export const queries = {
  getAuthorizationURL: {
    type: GraphQLNonNull(GraphQLString),
    resolve: getAuthorizationURL
  },
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
