import Topic from './TopicModel';

export async function getTopics() {
  const topics = await Topic.find();

  return topics;
}

export async function createTopic(_, { input }, context) {
  const { githubId: userGithubId } = context;
  if (!userGithubId)
    throw new Error('You must be logged in to create a topic!');

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
  if (!userGithubId) throw new Error('You must be logged in to vote!');

  const topic = await Topic.findById(topicId);
  if (!topic) throw new Error('Topic not found');

  let { votes } = topic;
  if (!votes.find(githubId => githubId === userGithubId))
    votes = [...votes, userGithubId];

  await topic.update({ votes });

  return topic;
}
