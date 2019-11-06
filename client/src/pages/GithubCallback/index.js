import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import queryString from 'query-string';
import { gql } from 'apollo-boost';
import { FaGithub } from 'react-icons/fa';

import { Container } from './styles';

const GET_BEARER_TOKEN = gql`
  query($githubCode: String) {
    getBearerToken(githubCode: $githubCode)
  }
`;

export default function Auth({ history }) {
  const { loading, data } = useQuery(GET_BEARER_TOKEN, {
    variables: { githubCode: queryString.parse(history.location.search).code },
  });

  useEffect(() => {
    if (!loading && data) {
      const { getBearerToken: token } = data;

      localStorage.setItem('@rocketvotes/token', token);
      history.push('/');
    }
  }, [loading, data]);

  return (
    <Container>
      <FaGithub size={60} />
      <h3>Carregando informações do GitHub...</h3>
    </Container>
  );
}
