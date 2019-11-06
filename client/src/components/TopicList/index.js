import React, { useState, useMemo } from 'react';
import Loader from 'react-loader-spinner';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Topic from './Topic';

import { Wrapper, Info, Container } from './styles';
import SearchBar from './SearchBar';

export const GET_TOPICS = gql`
  query getTopicList {
    getTopics {
      topics {
        id
        name
        description
        votes
      }
      pages
    }
  }
`;

export default function TopicList() {
  const [page, setPage] = useState(1);
  const { loading, data } = useQuery(GET_TOPICS, {
    variables: {
      page,
    },
  });

  const { topics, pages } = useMemo(
    () =>
      data
        ? {
            topics: data.getTopics.topics,
            pages: data.getTopics.pages,
          }
        : {},
    [data]
  );

  return (
    <Wrapper>
      <Info>
        <SearchBar />
        <p>
          Página {page} de {pages || '?'}
        </p>
      </Info>
      {loading ? (
        <Loader
          type="Grid"
          color="#fff"
          height={40}
          width={40}
          style={{ marginTop: '40px' }}
        />
      ) : (
        <Container>
          {topics.length > 0
            ? topics.map(({ id, name, description, votes }) => (
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
