import React, { useMemo, useEffect } from 'react';
import queryString from 'query-string';
import Loader from 'react-loader-spinner';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Topic from './Topic';

import { Wrapper, Info, Container, Pagination } from './styles';
import SearchBar from './SearchBar';

export const GET_TOPICS = gql`
  query($page: Int, $search: String) {
    getTopics(page: $page, search: $search) {
      topics {
        id
        name
        description
        votes
        author {
          name
          email
        }
      }
      pages
    }
  }
`;

export default function TopicList({ history }) {
  const query = useMemo(() => queryString.parse(history.location.search), [
    history.location.search,
  ]);

  const [search, page] = useMemo(() => {
    return [query.search, Number(query.page) || 1];
  }, [query]);

  const { loading, data, refetch } = useQuery(GET_TOPICS, {
    variables: {
      search,
      page,
    },
  });

  useEffect(() => {
    refetch();
  }, [page, search]);

  function handlePageChange(newPage) {
    history.push({
      search: queryString.stringify({
        ...query,
        page: newPage,
      }),
    });
  }

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

  const nextPage = page + 1;
  const prevPage = page - 1;
  const hasPrev = page !== 1 && page <= pages;

  return (
    <Wrapper>
      <Info>
        <SearchBar history={history} />
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
        <>
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
              : 'Não foram encontrados tópicos...'}
          </Container>
          <Pagination hasPrev={hasPrev}>
            {hasPrev && (
              <button onClick={() => handlePageChange(prevPage)}>Prev</button>
            )}
            <p>
              Page {page} of {pages || '?'}
            </p>
            {page >= 1 && nextPage <= pages && (
              <button onClick={() => handlePageChange(nextPage)}>Next</button>
            )}
          </Pagination>
        </>
      )}
    </Wrapper>
  );
}
