import { GraphQLList, GraphQLInputObjectType, GraphQLString } from 'graphql';

import TopicType from './TopicType';
import { getTopics, saveTopic, updateTopic } from './TopicLoader';

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
              type: GraphQLList(GraphQLString),
              defaultValue: []
            }
          }
        })
      }
    },
    resolve: saveTopic
  },
  voteTopic: {
    type: TopicType,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: 'TopicVote',
          fields: {
            token: {
              type: GraphQLString
            },
            topicId: {
              type: GraphQLString
            }
          }
        })
      }
    }
  }
};
