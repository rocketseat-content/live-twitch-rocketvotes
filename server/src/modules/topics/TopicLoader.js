import { AuthenticationError } from 'apollo-server';

import Topic from './TopicModel';

export async function getTopics(_, { search, page }) {
  const conditions = {};
  if (search) conditions.name = new RegExp(search, 'i');

  const perPage = 5;

  const { docs, total, limit, offset, pages } = await Topic.paginate(
    conditions,
    {
      limit: perPage,
      skip: ((page || 1) - 1) * perPage
    }
  );

  return {
    topics: docs,
    total,
    limit,
    offset,
    page: page || 1,
    pages
  };
}

export async function createTopic(_, { input }, context) {
  const { githubId: userGithubId } = context;
  if (!userGithubId)
    throw new AuthenticationError('You must be logged in to create a topic!');

  const { name, description, votes } = input;

  const topic = await Topic.create({
    name,
    description,
    votes
  });

  return topic;
}

export async function voteTopic(_, { topicId }, context) {
  const { githubId: userGithubId } = context;
  if (!userGithubId)
    throw new AuthenticationError('You must be logged in to vote!');

  const topic = await Topic.findById(topicId);
  if (!topic) throw new Error('Topic not found');

  let { votes } = topic;
  if (!votes.find(githubId => githubId === userGithubId))
    votes = [...votes, userGithubId];

  await topic.update({ votes });

  return topic;
}
