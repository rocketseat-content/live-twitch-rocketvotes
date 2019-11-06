import {
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLNonNull
} from 'graphql';

import TopicType from './TopicType';
import { getTopics, createTopic, voteTopic } from './TopicLoader';

export const queries = {
  getTopics: {
    type: new GraphQLObjectType({
      name: 'TopicList',
      fields: {
        topics: {
          type: GraphQLList(TopicType)
        },
        total: {
          type: GraphQLNonNull(GraphQLInt)
        },
        limit: {
          type: GraphQLNonNull(GraphQLInt)
        },
        offset: {
          type: GraphQLNonNull(GraphQLInt)
        },
        page: {
          type: GraphQLNonNull(GraphQLInt)
        },
        pages: {
          type: GraphQLNonNull(GraphQLInt)
        }
      }
    }),
    args: {
      search: {
        type: GraphQLString
      },
      page: {
        type: GraphQLInt
      }
    },
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
