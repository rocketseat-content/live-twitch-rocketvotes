import Topic from './TopicModel';

export async function saveTopic(_, { input }) {
  const { name, description, votes } = input;

  const topic = await Topic.create({
    name,
    description,
    votes
  });

  return topic;
}

export async function updateTopic(_, { input }) {
  const { id, votes } = input;

  const topic = await Topic.findByIdAndUpdate(id, {
    votes
  });

  return topic;
}

export async function getTopics() {
  const topics = await Topic.find();

  return topics;
}
