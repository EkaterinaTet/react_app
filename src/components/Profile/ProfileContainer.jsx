import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import {
  setUserProfile,
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
} from "../../redux/profile-reducer";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";
import { compose } from "redux";

function ProfileContainer(props) {
  let { userId } = useParams();

  useEffect(() => {
    if (!userId) {
      userId = props.authorizedUserId; // мой - 30607
    }
    props.getUserProfile(userId);
    props.getStatus(userId);
  }, [userId]);

  return (
    <div>
      <Profile
        {...props}
        savePhoto={props.savePhoto}
        isOwner={!userId}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        saveProfile={props.saveProfile}
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
    savePhoto,
    saveProfile,
  }),
  withAuthNavigate
)(ProfileContainer);
