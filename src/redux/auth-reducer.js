import { authAPI } from "../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        //isAuth: true, //меняем флаг на true(после того как мы залогинены)
      };
    default:
      return state;
  }
};

//action creator
export const setUserData = (id, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    data: { id, email, login, isAuth },
  };
};

//thunk
export const getAuthUserData = () => async (dispatch) => {
  let data = await authAPI.me();
  if (data.resultCode === 0) {
    //если мы залогинены
    let { id, email, login } = data.data;
    dispatch(setUserData(id, email, login, true)); //последнее тру это - isAuth
  }
};

export const login =
  (email, password, rememberMe, setError) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe);
    if (data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      setError("server", {
        type: "custom",
        message: data.messages,
      });
    }
  };
export const logout = () => async (dispatch) => {
  let data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false)); //последнее false это - isAuth
  }
};
export default authReducer;
