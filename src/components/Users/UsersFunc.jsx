import s from "./Users.module.css";
import userImg from "../../assets/img/user.png";
import { NavLink } from "react-router-dom";
import Paginator from "../common/Preloader/Paginator/Paginator";

let UsersFunc = (props) => {
  return (
    <div>
      <Paginator
        currentPage={props.currentPage}
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        onPageChanged={props.onPageChanged}
      />
      {/* <div className={s.pagination}>
        {slicedPages.map((p) => {
          return (
            <span
              className={props.currentPage === p ? s.selected_number : ""}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div> */}

      {props.users.map((u) => {
        return (
          <div key={u.id} className={s.users}>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userImg}
                  alt="user"
                />
              </NavLink>
              <div>
                {u.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    className={s.btn_follow}
                    onClick={() => {
                      props.unfollow(u.id);
                      // props.toggleFollowingProgress(true, u.id);
                      // usersAPI.userUnfollow(u.id).then((response) => {
                      //   if (response.data.resultCode == 0) {
                      //     props.unfollowSuccess(u.id);
                      //   }
                      //   props.toggleFollowingProgress(false, u.id);
                      // });
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    className={s.btn_follow}
                    onClick={() => {
                      props.follow(u.id);
                      // props.toggleFollowingProgress(true, u.id);
                      // usersAPI.userFollow(u.id).then((response) => {
                      //   if (response.data.resultCode == 0) {
                      //     props.followSuccess(u.id);
                      //   }
                      //   props.toggleFollowingProgress(false, u.id);
                      // });
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
            <div className={s.users_content}>
              <div className={s.user_data}>
                <p className={s.user_name}>{u.name}</p>
                <p>{u.status}</p>
              </div>
              <div className={s.user_data}>
                <p className={s.user_location}>u.location.county</p>
                <p className={s.user_location}>u.location.city</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default UsersFunc;
