import React, { useEffect } from "react";
import s from "./ProfileInfo.module.css";
import { useForm } from "react-hook-form";
const ProfileDataForm = (props) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: props.profile,
  });

  useEffect(() => {});

  const onSubmit = (data) => {
    props.saveProfile(data, setError).then(() => {
      props.setEditMode(false);
    });
  };

  return (
    <div className={s.profile_text}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.server && (
          <div style={{ color: "red" }}>
            <span>{errors.server.message}</span>
          </div>
        )}
        <div>
          <button
            className={s.profile_cancel_btn}
            onClick={props.goToViewMode}
            type={"button"}
          >
            {" "}
            Cancel
          </button>
          <input className={s.profile_edit_btn} type="submit" value="Save" />
        </div>
        <p>
          <input
            {...register("fullName")}
            type="text"
            placeholder="full name"
          />
        </p>
        <p>
          <b>About me</b>:
          <textarea
            className={s.profile_edit_textarea}
            {...register("aboutMe")}
            placeholder="tell us about yourselfls"
          />
        </p>
        <p>
          <b>Looking for a job</b>:{" "}
          <input {...register("lookingForAJob")} type="checkbox" /> yes
        </p>
        <p>
          {" "}
          <b>Skills</b>:
          <input
            {...register("lookingForAJobDescription")}
            type="text"
            placeholder="your skills"
          />
        </p>

        <div>
          <b>Contacts</b>:{" "}
          {Object.keys(props.profile.contacts).map((key) => {
            return (
              <div>
                {" "}
                {key}:{" "}
                <input
                  {...register("contacts." + key)}
                  placeholder={key}
                  type="text"
                />
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
};
export default ProfileDataForm;
