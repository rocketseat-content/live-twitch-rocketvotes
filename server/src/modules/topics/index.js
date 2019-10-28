import {
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt
} from 'graphql';

import TopicType from './TopicType';
import { getTopics, saveTopic } from './TopicLoader';

export const queries = {
  getTopics: {
    type: GraphQLList(TopicType),
    resolve: getTopics
  }
};

export const mutations = {
  saveTopic: {
    type: TopicType,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: 'TopicInput',
          fields: {
            name: {
              type: GraphQLString
            },
            description: {
              type: GraphQLString
            },
            votes: {
              type: GraphQLInt
            }
          }
        })
      }
    },
    resolve: saveTopic
  }
};
