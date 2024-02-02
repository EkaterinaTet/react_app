import s from "./News.module.css";
import workImg from "../../assets/img/newsWork.jpg";
import reactImg from "../../assets/img/newsReact.jpg";
import hookImg from "../../assets/img/newsHook.png";

const News = () => {
  return (
    <>
      <h2>News</h2>
      <div className={s.news_items}>
        <div className={s.news_item}>
          <img src={workImg} alt="news" />
          <a href="#" target="blank" className={s.news_title}>
            How to find a job in 2024?
          </a>

          <p>
            <i>02.08.202</i>3
          </p>
        </div>
        <div className={s.news_item}>
          <img src={reactImg} alt="news" />
          <a href="#" target="blank" className={s.news_title}>
            Learning React
          </a>

          <p>
            <i>01.10.2023</i>
          </p>
        </div>
        <div className={s.news_item}>
          <img src={hookImg} alt="news" />
          <a href="#" target="blank" className={s.news_title}>
            Hook - useForm{" "}
          </a>

          <p>
            <i>10.01.2024</i>
          </p>
        </div>
      </div>
    </>
  );
};
export default News;
