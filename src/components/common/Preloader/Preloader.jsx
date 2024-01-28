import loader from "./../../../assets/img/loader.gif";
import s from "./Preloader.module.css";

let Preloader = (props) => {
  return (
    <div className={s.preloader}>
      <img src={loader} className={s.preloader_img} />
    </div>
  );
};
export default Preloader;
