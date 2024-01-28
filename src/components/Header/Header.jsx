import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

function Header(props) {
  return (
    <div className={s.header}>
      <img src="https://cdn.onlinewebfonts.com/svg/img_176857.png" alt="logo" />

      <div className={s.login_block}>
        {props.isAuth ? (
          <div>
            {props.login} -{" "}
            <button className={s.btn_logout} onClick={props.logout}>
              Log out
            </button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </div>
  );
}
export default Header;
