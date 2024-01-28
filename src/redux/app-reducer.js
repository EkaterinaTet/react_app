import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

//action creator
export const initializedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS,
  };
};

//thunk
export const initializeApp = () => async (dispatch) => {
  let promise = [];
  promise.push(dispatch(getAuthUserData()));
  await Promise.all(promise);
  dispatch(initializedSuccess());
};

export default appReducer;
