import {
  setCurrentPage,
  getUsersThunkCreator,
  follow,
  unfollow,
  setUsers,
  toggleIsFetching,
  pageChanged,
} from "../../redux/users-reducer";
import { connect } from "react-redux";
import React, { useEffect } from "react"; //для классов
import UsersFunc from "./UsersFunc";
import Preloader from "../common/Preloader/Preloader";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../redux/users-selectors";

const UsersAPI = (props) => {
  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize);
  }, []);
  const onPageChanged = (pageNumber) => {
    props.pageChanged(pageNumber, props.pageSize); //это из users-reducer (thunk)
  };
  return (
    <>
      {props.isFetching ? <Preloader /> : null}
      <UsersFunc
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={onPageChanged}
        users={props.users}
        followingInProgress={props.followingInProgress}
        follow={props.follow}
        unfollow={props.unfollow}
      />
    </>
  );
};

//вместо этого
// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
// и тд
//   };
// };

//это

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setUsersTotalCountAC(totalCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     },
//   };
// };

export default compose(
  connect(mapStateToProps, {
    setCurrentPage,
    getUsers: getUsersThunkCreator,
    follow,
    unfollow,
    setUsers,
    toggleIsFetching,
    pageChanged,
  }),
  withAuthNavigate
)(UsersAPI);
