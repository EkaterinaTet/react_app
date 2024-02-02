import { usersAPI } from "../api/api";
const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET-USERS";
const SET_CURRENT_PAGE = "users/SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "users/SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE-IS-FOLLOWING-PROGRESS";

let initialState = {
  users: [],
  pageSize: 6,
  totalUsersCount: 0,
  currentPage: 1, //текущая стр(которая выделена жирным)
  isFetching: false, //preloader
  followingInProgress: [], //disabled кнопки
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users, // чтобы не дублировалось, а было users: [...state.users, ...action.users]
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};
//action creator (которые передаю в UsersContainer = connect вторым параметром)
export const followSuccess = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const unfollowSuccess = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};
export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
  };
};
export const setTotalUsersCount = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount,
  };
};
export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};
export const toggleFollowingProgress = (isFetching, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
  };
};

//thunks
export const getUsersThunkCreator = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};
export const pageChanged = (pageNumber, pageSize) => async (dispatch) => {
  dispatch(setCurrentPage(pageNumber));
  dispatch(toggleIsFetching(true));
  // axios
  //   .get(
  //     `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
  //     {
  //       withCredentials: true,
  //     }
  //   )
  let data = await usersAPI.getUsers(pageNumber, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
};

let followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, userId));
  let response = await apiMethod(userId);
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
    dispatch(toggleFollowingProgress(false, userId));
  }
};
export const follow = (userId) => {
  return async (dispatch) => {
    let apiMethod = await usersAPI.userFollow.bind(usersAPI);
    let actionCreator = followSuccess;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
  };
};
export const unfollow = (userId) => {
  return async (dispatch) => {
    let apiMethod = await usersAPI.userUnfollow.bind(usersAPI);
    let actionCreator = unfollowSuccess;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
  };
};

export default usersReducer;
