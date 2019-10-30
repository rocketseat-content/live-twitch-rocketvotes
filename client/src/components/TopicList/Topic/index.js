import React from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import { FaAngleUp } from 'react-icons/fa';
import { gql } from 'apollo-boost';

import { Container, Votes, Info } from './styles';

const VOTE_TOPIC = gql`
  mutation voteTopic($id: String, $votes: Int) {
    voteTopic(input: { id: $id, votes: $votes }) {
      id
    }
  }
`;

export default function Topic({ id, name, description, votes }) {
  const [saveTopic] = useMutation(VOTE_TOPIC);

  async function handleVote() {
    await saveTopic({
      variables: { id, votes: Number(votes.length + 1) },
      refetchQueries: () => [{ query: 'getTopicList' }],
    });
  }

  return (
    <Container>
      <Votes>
        <FaAngleUp size={20} color="#fff" onClick={handleVote} />
        {votes.length}
      </Votes>
      <Info>
        <h2>{name}</h2>
        <p>{description}</p>
      </Info>
    </Container>
  );
}

Topic.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  votes: PropTypes.array.isRequired,
};
