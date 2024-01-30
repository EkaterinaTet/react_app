import React, { useEffect } from "react";
import s from "./ProfileInfo.module.css";
import { useForm } from "react-hook-form";
const ProfileDataForm = (props) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    clearErrors,
  } = useForm({
    defaultValues: props.profile,
  });

  useEffect(() => {});

  const onSubmit = (data) => {
    // props.saveProfile(data).then((response) => {
    //   if (!response) {
    //     return props.setEditMode(false);
    //   }
    // });
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
          {/*
          <button onClick={props.goToViewMode} type={"button"}>
            {" "}
            Cancel
          </button> */}
          <input type="submit" value="Save" />
        </div>
        <p>
          <input
            {...register("fullName")}
            type="text"
            placeholder="full name"
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
        <p>
          <b>About me</b>:
          <textarea
            {...register("aboutMe")}
            placeholder="tell us about yourselfls"
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
