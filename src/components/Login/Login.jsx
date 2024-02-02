import { useForm } from "react-hook-form";
import s from "./Login.module.css";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    clearErrors,
    setError,
    //   reset,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    props.login(
      data.email,
      data.password,
      data.rememberMe,
      data.captcha,
      setError
    );
    // reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register("email", {
            required: "require field!",
          })}
          onFocus={() => clearErrors(["email", "server"])}
          type="email"
          placeholder="Email"
        />
        {errors.email && (
          <div style={{ color: "red" }}>{errors.email.message || "Error!"}</div>
        )}
      </div>

      <div>
        <input
          {...register("password", { required: "require field!" })}
          onFocus={() => clearErrors(["password", "server"])}
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <div style={{ color: "red" }}>
            {errors.password.message || "Error"}
          </div>
        )}
      </div>

      <div>
        <input {...register("rememberMe")} type="checkbox" /> remember me
      </div>

      {errors.server && (
        <div style={{ color: "red" }}>
          <span>{errors.server.message}</span>
        </div>
      )}

      {props.captchaUrl && (
        <img
          style={{
            height: "100px",
            width: "180px",
            display: "flex",
            marginBottom: "10px",
            marginTop: "10px",
          }}
          src={props.captchaUrl}
          alt="captcha"
        />
      )}
      {props.captchaUrl && (
        <input
          {...register("captcha", {
            required: "require field",
          })}
          type="text"
          placeholder="Symbols from image"
        />
      )}

      <input
        className={s.form_btn}
        type="submit"
        disabled={!isValid}
        value="Log in"
      />
    </form>
  );
};

const Login = (props) => {
  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div className={s.form_login}>
      <h1>Login</h1>
      <LoginForm login={props.login} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(Login);
