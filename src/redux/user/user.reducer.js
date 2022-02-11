import userTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  userErr: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SIGN_IN_SUCCES:
      return {
        ...state,
        currentUser: action.payload,
        userErr: [],
      };
    case userTypes.SIGN_OUT_USER_SUCCES:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case userTypes.USER_ERROR:
      return {
        ...state,
        userErr: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
