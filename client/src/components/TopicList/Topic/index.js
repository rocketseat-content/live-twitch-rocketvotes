import React from 'react';
import { FaAngleUp } from 'react-icons/fa';

import { Container, Votes, Info } from './styles';

export default function Topic({ name, description, votes }) {
  return (
    <Container>
      <Votes>
        <FaAngleUp size={20} color="#fff" />
        {votes}
      </Votes>
      <Info>
        <h2>{name}</h2>
        <p>{description}</p>
      </Info>
    </Container>
  );
}
