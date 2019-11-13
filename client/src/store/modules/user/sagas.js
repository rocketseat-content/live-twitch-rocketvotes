import { takeLatest, call, put, all } from 'redux-saga/effects';
import { gql } from 'apollo-boost';
import { getProfileSuccess } from './actions';

import api from '../../../services/client';

const GET_USER = gql`
  query {
    getUser {
      name
      avatarUrl
    }
  }
`;

export function* getProfile() {
  try {
    const response = yield call(api.query, {
      query: GET_USER,
    });

    const { avatarUrl, name } = response.data.getUser;

    yield put(
      getProfileSuccess({
        avatarUrl,
        name,
      })
    );
  } catch (err) {
    console.log('Error while updating your profile!');
    console.log(err);
  }
}

export default all([takeLatest('@user/GET_PROFILE_REQUEST', getProfile)]);
