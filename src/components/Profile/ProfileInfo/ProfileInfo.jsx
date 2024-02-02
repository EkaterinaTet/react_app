import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userImg from "../../../assets/img/user.png";
import status from "../../../assets/img/writeStatus.svg";
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";

function ProfileInfo(props) {
  const [editMode, setEditMode] = useState(false);

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
            <span>Add a file</span>
          </label>
        )}
        <div className={s.write_status}>
          <img className={s.status} src={status} alt="write-status" />
          <ProfileStatus
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>

        {editMode ? (
          <ProfileDataForm
            setEditMode={setEditMode}
            goToViewMode={() => setEditMode(false)}
            saveProfile={props.saveProfile}
            profile={props.profile}
          />
        ) : (
          <ProfileData
            goToEditMode={() => {
              setEditMode(true);
            }}
            profile={props.profile}
            isOwner={props.isOwner}
          />
        )}
      </div>
    </>
  );
}
export const ProfileData = (props) => {
  return (
    <div className={s.profile_text}>
      {props.isOwner && (
        <div>
          <button className={s.profile_edit_btn} onClick={props.goToEditMode}>
            Edit
          </button>
        </div>
      )}

      <p className={s.profile_name}>{props.profile.fullName}</p>
      <p>{props.profile.aboutMe}</p>
      <p>
        <b>Looking for a job</b>: {props.profile.lookingForAJob ? "Yes" : "No"}
      </p>
      {props.profile.lookingForAJob && (
        <p>
          {" "}
          <b>Skills</b>: {props.profile.lookingForAJobDescription}
        </p>
      )}
      <div>
        <b>Contacts</b>:{" "}
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={props.profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <p>
      {contactTitle}: {contactValue}
    </p>
  );
};

export default ProfileInfo;
