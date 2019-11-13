import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

import UserType from '../users/UserType';

export default new GraphQLObjectType({
  name: 'Topic',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLString)
    },
    name: {
      type: GraphQLNonNull(GraphQLString)
    },
    description: {
      type: GraphQLNonNull(GraphQLString)
    },
    votes: {
      type: GraphQLNonNull(GraphQLList(GraphQLString))
    },
    author: {
      type: GraphQLNonNull(UserType)
    },
    createdAt: {
      type: GraphQLNonNull(GraphQLDateTime)
    },
    updatedAt: {
      type: GraphQLNonNull(GraphQLDateTime)
    }
  }
});
