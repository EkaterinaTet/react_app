import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userImg from "../../../assets/img/user.png";

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };
  return (
    <>
      <div className={s.profile_data}>
        <img
          className={s.avatar}
          src={
            props.profile.photos.large != null
              ? props.profile.photos.large
              : userImg
          }
          alt="avatar"
        />
        {props.isOwner && (
          <label className={s.input_file}>
            <input name="file" type="file" onChange={onMainPhotoSelected} />
            <span>Выберите файл</span>
          </label>
        )}
        <div className={s.profile_text}>
          <p>{props.profile.fullName}</p>
          <p>
            {props.profile.lookingForAJob == true
              ? "В поисках работы"
              : "Не ищу работу"}
            - {props.profile.lookingForAJobDescription}
          </p>
          <ProfileStatus
            status={props.status}
            updateStatus={props.updateStatus}
          />
          <p>
            <i>{props.profile.aboutMe}</i>
          </p>
        </div>
      </div>
    </>
  );
}
export default ProfileInfo;
