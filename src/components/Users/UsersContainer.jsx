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
import axios from "axios"; //работа с сервером(библиотека)
import React from "react"; //для классов
import UsersFunc from "./UsersFunc";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";
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

class UsersAPI extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
    //{this.props.toggleIsFetching(true);}
    // axios
    //   .get(
    //     `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
    //     {
    //       withCredentials: true,
    //     }
    //   )
    // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
    //     this.props.toggleIsFetching(false);
    //     this.props.setUsers(data.items);
    //     this.props.setTotalUsersCount(data.totalCount);
    //   });
  }
  onPageChanged = (pageNumber) => {
    this.props.pageChanged(pageNumber, this.props.pageSize); //это из users-reducer (thunk)

    // this.props.setCurrentPage(pageNumber);
    // this.props.toggleIsFetching(true);
    // // axios
    // //   .get(
    // //     `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
    // //     {
    // //       withCredentials: true,
    // //     }
    // //   )
    // usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
    //   this.props.toggleIsFetching(false);
    //   this.props.setUsers(data.items);
    // });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <UsersFunc
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          followingInProgress={this.props.followingInProgress}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

//вместо этого
// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
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

//вместо этого:
// let AuthNavigateComponent = withAuthNavigate(UsersAPI);
// const UsersContainer = connect(mapStateToProps, {
//   setCurrentPage,
//   getUsers: getUsersThunkCreator,
//   follow,
//   unfollow,
//   setUsers,
//   toggleIsFetching,
//   pageChanged,
// })(AuthNavigateComponent);
// export default UsersContainer;

//это:
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
