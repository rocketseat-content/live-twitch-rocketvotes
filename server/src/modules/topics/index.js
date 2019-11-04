import { GraphQLList, GraphQLInputObjectType, GraphQLString } from 'graphql';

import TopicType from './TopicType';
import { getTopics, createTopic, voteTopic } from './TopicLoader';

export const queries = {
  getTopics: {
    type: GraphQLList(TopicType),
    resolve: getTopics
  }
};

export const mutations = {
  createTopic: {
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
              type: GraphQLList(GraphQLString),
              defaultValue: []
            }
          }
        })
      }
    },
    resolve: createTopic
  },
  voteTopic: {
    type: TopicType,
    args: {
      topicId: {
        type: GraphQLString
      }
    },
    resolve: voteTopic
  }
};
