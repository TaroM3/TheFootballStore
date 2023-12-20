import { auth } from '../firebaseConfig';
export const initialState = {
  uidToken: '',
  email: '',
  name: '',
  isAdmin: false,
};

export const USER_ACTION = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  GET_CONNECTION: 'GET_CONNECTION',
};

const UPDATE_STATE_BY_ACTION = {
  [USER_ACTION.LOGIN]: (state, action) => {
    console.log(action.payload);

    // login({ data });
    // if (data.email !== '') {
    //   return { ...state, ...data };
    // }

    return { ...state, ...action.payload };
  },

  [USER_ACTION.LOGOUT]: (state, action) => {
    auth.signOut();
    console.log('logout');
    return { ...state, ...action.payload };
  },
  [USER_ACTION.GET_CONNECTION]: (state, action) => {
    // const idToken = auth.currentUser.getIdTokenResult();
    // console.log(action.payload, idToken);
    // if (idToken) {
    //   return { ...state };
    // } else {
    return {
      ...state,
      ...action.payload,
    };
    // }
  },
};

function userReducer(state, action) {
  const { type: actionType } = action;
  const updateState = UPDATE_STATE_BY_ACTION[actionType];
  return updateState ? updateState(state, action) : state;
}

export default userReducer;
