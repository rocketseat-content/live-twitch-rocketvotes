import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import queryString from 'query-string';
import { FaGithub } from 'react-icons/fa';

import { signInRequest } from '../../store/modules/auth/actions';

import { Container } from './styles';

export default function GithubCallback({ history }) {
  const { name } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (name) history.push('/');
  }, [name, history]);

  useEffect(() => {
    dispatch(
      signInRequest({
        code: queryString.parse(history.location.search).code,
      })
    );
  }, [dispatch, history]);

  return (
    <Container>
      <FaGithub size={60} />
      <h3>Carregando informações do GitHub...</h3>
    </Container>
  );
}
