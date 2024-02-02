import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const setActive = ({ isActive }) => ({
  color: isActive ? "rgb(121, 118, 118)" : "black",
});

function Navbar() {
  return (
    <div className={s.navbar_menu}>
      <ul className={s.navbar_list}>
        <li className={s.navbar_elem}>
          <NavLink to="/profile" style={setActive}>
            Profile
          </NavLink>
        </li>
        <li className={s.navbar_elem}>
          <NavLink to="/chat" style={setActive}>
            Chat
          </NavLink>
        </li>
        <li className={s.navbar_elem}>
          <NavLink to="/news" style={setActive}>
            News
          </NavLink>
        </li>

        <li className={s.navbar_elem}>
          <NavLink to="/users" style={setActive} className={s.users_title}>
            Users
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
