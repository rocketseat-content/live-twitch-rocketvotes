import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import { GoTriangleUp } from 'react-icons/go';
import { gql } from 'apollo-boost';

import { Container, Votes, Info, Modal } from './styles';
import { GET_TOPICS } from '../index';

const VOTE_TOPIC = gql`
  mutation voteTopic($topicId: String) {
    voteTopic(topicId: $topicId) {
      id
    }
  }
`;

Modal.setAppElement('#root');

export default function Topic({ id, name, description, votes }) {
  const { signed } = useSelector(state => state.auth);

  const [modalOpened, setModalOpened] = useState(false);
  const [voteTopic] = useMutation(VOTE_TOPIC, {
    variables: { topicId: id },
  });

  return (
    <>
      <Modal
        isOpen={modalOpened}
        onRequestClose={() => setModalOpened(false)}
        contentLabel={`Informações sobre o tópico: ${name}`}
      >
        <button type="button" aria-label="Fechar modal">
          x
        </button>
        <section>
          <h3>{name}</h3>
        </section>
      </Modal>
      <Container>
        <Votes>
          {signed && (
            <GoTriangleUp size={20} color="#fff" onClick={voteTopic} />
          )}
          {votes.length}
        </Votes>
        <Info onClick={() => setModalOpened(true)}>
          <h2>{name}</h2>
          <p>{description.substring(0, 100)}...</p>
        </Info>
      </Container>
    </>
  );
}

Topic.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  votes: PropTypes.array.isRequired,
};
