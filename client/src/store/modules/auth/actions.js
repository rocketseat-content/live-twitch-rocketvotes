export function signInRequest({ code }) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { code },
  };
}

export function signInSuccess({ token }) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token },
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
