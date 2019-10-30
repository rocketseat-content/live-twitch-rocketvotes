import { GraphQLNonNull, GraphQLString } from 'graphql';

import UserType from './UserType';
import { getAuthorizationURL, getAccessToken, getUser } from './UserLoader';

export const queries = {
  getAuthorizationURL: {
    type: GraphQLNonNull(GraphQLString),
    resolve: getAuthorizationURL
  },
  getAccessToken: {
    type: GraphQLNonNull(GraphQLString),
    args: {
      code: { type: GraphQLString }
    },
    resolve: getAccessToken
  },
  getUser: {
    type: UserType,
    args: {
      token: { type: GraphQLString }
    },
    resolve: getUser
  }
};

export const mutations = {};
