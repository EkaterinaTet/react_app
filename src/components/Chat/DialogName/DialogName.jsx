import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";

const DialogName = (props) => {
  return (
    <li className={s.dialog_content}>
      <img
        className={s.dialog_avatar}
        src="https://www.svgrepo.com/show/452030/avatar-default.svg"
        alt="avatar"
      />
      <NavLink to={"/chat/" + props.id}>{props.name}</NavLink>
    </li>
  );
};
export default DialogName;
