import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function admim(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.admin;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }
      case '@auth/DELETE_PROFILE': {
        draft.profile = action.payload.profile;
        break;
      }
      default:
    }
  });
}