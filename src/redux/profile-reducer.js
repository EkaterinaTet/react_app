import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "profile/ADD-POST";
const SET_USER_PROFILE = "profile/SET-USER-PROFILE";
const SET_STATUS = "profile/SET-STATUS";
const DELETE_POST = "profile/DELETE-POST";
const SAVE_PHOTO_SUCCESS = "profile/SAVE-PHOTO-SUCCESS";

let initialState = {
  postData: [
    {
      id: 1,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, reprehenderit!",
      like: 15,
    },
    { id: 2, message: "Hello, how are you?", like: 5 },
    { id: 3, message: "How are you?", like: 10 },
    { id: 4, message: "Good day!)", like: 20 },
  ],
  // newPostText: "Write something",
  profile: null, //профиля пока нет
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        like: 0,
      };
      let stateCopy = { ...state };
      stateCopy.postData = [...state.postData];
      stateCopy.postData.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }

    // case UPDATE_NEW_POST_TEXT: {
    //   let stateCopy = { ...state };
    //   stateCopy.newPostText = action.newText;
    //   return stateCopy;
    // }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        postData: state.postData.filter((p) => p.id !== action.postId),
      };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    }
    default:
      return state;
  }
};

//action creator
export const addPostActionCreator = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText,
  };
};
export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    postId,
  };
};
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

//thunk
export const getUserProfile = (userId) => {
  return async (dispatch) => {
    let data = await usersAPI.getProfileId(userId);
    dispatch(setUserProfile(data));
  };
};
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};
export const saveProfile =
  (profile, setError) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId));
    } else {
      setError("server", {
        type: "custom",
        message: response.data.messages,
      });
      //return Promise.reject(response.data.messages);
    }
  };

export default profileReducer;
