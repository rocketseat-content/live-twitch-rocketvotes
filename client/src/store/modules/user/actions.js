export function getProfileRequest() {
  return {
    type: '@user/GET_PROFILE_REQUEST',
  };
}

export function getProfileSuccess({ name, avatarUrl }) {
  return {
    type: '@user/GET_PROFILE_SUCCESS',
    payload: { name, avatarUrl },
  };
}
