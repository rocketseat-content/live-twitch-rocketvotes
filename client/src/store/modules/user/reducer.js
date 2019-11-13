import { produce } from 'immer';

const INITIAL_STATE = {
  name: null,
  avatarUrl: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/GET_PROFILE_SUCCESS': {
        draft.name = action.payload.name;
        draft.avatarUrl = action.payload.avatarUrl;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.name = null;
        draft.avatarUrl = null;
        break;
      }
      default:
    }
  });
}
