import { call, put, all, takeLatest } from 'redux-saga/effects';
import { gql } from 'apollo-boost';
import { toast } from 'react-toastify';

import api, { setBearerToken } from '../../../services/client';
import { signInSuccess } from './actions';
import { getProfileRequest } from '../user/actions';

const GET_BEARER_TOKEN = gql`
  query($githubCode: String) {
    getBearerToken(githubCode: $githubCode)
  }
`;

export function* signIn({ payload }) {
  try {
    const { code } = payload;

    const response = yield call(api.query, {
      query: GET_BEARER_TOKEN,
      variables: { githubCode: code },
    });

    const token = response.data.getBearerToken;

    setBearerToken(`Bearer ${token}`);

    yield put(signInSuccess({ token }));
    yield put(getProfileRequest());
  } catch (err) {
    toast.error('An error occured while trying to sign in on the application.');
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) setBearerToken(`Bearer ${token}`);
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
