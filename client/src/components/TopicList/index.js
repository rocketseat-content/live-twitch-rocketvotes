import React from 'react';
import Loader from 'react-loader-spinner';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Topic from './Topic';

import { Wrapper, Info, Container } from './styles';
import SearchBar from './SearchBar';

export const GET_TOPICS = gql`
  query getTopicList {
    getTopics {
      id
      name
      description
      votes
    }
  }
`;

export default function TopicList() {
  const { loading, data } = useQuery(GET_TOPICS);

  return (
    <Wrapper>
      <Info>
        <SearchBar />
        <p>Página 1 de 10</p>
      </Info>
      {loading ? (
        <Loader type="Grid" color="#fff" height={40} width={40} style={{ marginTop: '40px' }} />
      ) : (
          <Container>
            {data.getTopics.length > 0
              ? data.getTopics.map(({ id, name, description, votes }) => (
                <Topic
                  key={id}
                  id={id}
                  name={name}
                  description={description}
                  votes={votes}
                />
              ))
              : 'Não há tópicos cadastrados...'}
          </Container>
        )}
    </Wrapper>
  );
}
