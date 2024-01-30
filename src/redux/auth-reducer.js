import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
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
export const getCaptchaUrlSuccess = (captchaUrl) => {
  return {
    type: GET_CAPTCHA_URL_SUCCESS,
    data: { captchaUrl },
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
  (email, password, rememberMe, captcha, setError) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      if (data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      setError("server", {
        type: "custom",
        message: data.messages,
      });
    }
  };
export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch) => {
  let data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false)); //последнее false это - isAuth
  }
};
export default authReducer;
