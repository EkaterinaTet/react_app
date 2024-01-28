import s from "./Post.module.css";

function Post(props) {
  return (
    <div className={s.post}>
      <p>{props.message}</p>
      <span>{props.like}</span> ♥<button type="button">Like</button>
    </div>
  );
}

export default Post;
