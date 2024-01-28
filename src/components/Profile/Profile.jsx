import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer
      // store={props.store}

      // postData={props.profilePage.postData}
      // newPostText={props.profilePage.newPostText}
      // dispatch={props.dispatch}
      />
    </div>
  );
}
export default Profile;
