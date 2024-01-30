import { useState } from "react";
import s from "./Paginator.module.css";

const Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / 10);
  let [currentPortion, setCurrentPortion] = useState(
    Math.ceil(props.currentPage / 10)
  ); // или useState(1) - будет сбрасываться на 1 стр при уходе
  let currentLeftBorder = (currentPortion - 1) * 10 + 1; //10 - сколько стр будет выводиться за раз
  let currentRightBorder = currentPortion * 10;

  //чтобы выводились не все стр сразу
  // let slicedPages;
  // let curPage = props.currentPage;
  // if (curPage - 3 < 0) {
  //   slicedPages = pages.slice(0, 5);
  // } else {
  //   slicedPages = pages.slice(curPage - 3, curPage + 2);
  // }

  return (
    <div className={s.pagination}>
      {currentPortion > 1 ? (
        <span>
          {/* <button
            onClick={() => {
              props.onPageChanged(pages[0]);
              setCurrentPortion(1);
            }}>toFirst</button> */}
          <button
            className={`${s.pagination_btn} ${s.pagination_btnLeft}`}
            onClick={() => {
              currentPortion !== 1 && setCurrentPortion(currentPortion - 1);
            }}
          ></button>
        </span>
      ) : null}
      {pages
        .filter((p) => currentLeftBorder <= p && p <= currentRightBorder)
        .map((p) => {
          return (
            <span
              key={p}
              className={props.currentPage === p ? s.selected_number : ""}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {currentPortion < portionCount ? (
        <span>
          <button
            className={`${s.pagination_btn} ${s.pagination_btnRight}`}
            onClick={() => {
              currentPortion !== pagesCount &&
                setCurrentPortion(currentPortion + 1);
            }}
          ></button>{" "}
          {/* <button
            onClick={() => {
              props.onPageChanged(pages[pages.length - 1]);
              setCurrentPortion(10);}}>toLast</button> */}
        </span>
      ) : null}
    </div>
  );
};
export default Paginator;
