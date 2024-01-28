import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
//import axios from "axios";
import { useParams } from "react-router-dom";
import {
  setUserProfile,
  getUserProfile,
  getStatus,
  updateStatus,
} from "../../redux/profile-reducer";
//import { usersAPI } from "../../api/api";
import { Navigate } from "react-router-dom";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";
import { compose } from "redux";

function ProfileContainer(props) {
  // let { userId } = useParams();
  // let navigate = useNavigate();

  // useEffect(() => {
  //   if (!userId) {
  //     userId = props.authorizedUserId;
  //     if (!userId) {
  //       navigate("/login");
  //     }
  //   }

  //   if (userId) {
  //     props.getUserProfile(userId);
  //     props.getStatus(userId);
  //   }
  // }, [userId]);

  let { userId } = useParams();

  useEffect(() => {
    if (!userId) {
      // userId = 30607;
      userId = props.authorizedUserId; // мой - 30607
    }
    props.getUserProfile(userId);
    props.getStatus(userId);
    // axios
    //   .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)

    // usersAPI.getProfileId(userId).then((data) => {
    //   props.setUserProfile(data);
    // });
  }, [userId]);

  return (
    <div>
      <Profile
        {...props}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </div>
  );
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});

//вместо этого:
// let AuthNavigateComponent = withAuthNavigate(ProfileContainer);
// export default connect(mapStateToProps, { setUserProfile, getUserProfile })(AuthNavigateComponent);

//это:
export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getUserProfile,
    getStatus,
    updateStatus,
  }),
  withAuthNavigate
)(ProfileContainer);
