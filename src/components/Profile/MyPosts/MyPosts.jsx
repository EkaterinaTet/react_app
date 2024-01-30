import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";
import { useForm } from "react-hook-form";

const MyPosts = (props) => {
  let postElement = [...props.postData]
    .reverse()
    .map((post) => (
      <Post
        key={post.id}
        id={post.id}
        message={post.message}
        like={post.like}
      />
    ));

  // let newPostElement = React.createRef();

  // let onAddPost = () => {
  //   props.addPost();
  // };
  // //будет обрабатывать,когда будет попытка изменить текст в textarea
  // let onPostChange = () => {
  //   let text = newPostElement.current.value;
  //   props.updateNewPostText(text);
  // };

  return (
    <>
      <div className={s.profile_posts}>
        <MyPostsForm
          // newPostElement={props.newPostElement}
          addPost={props.addPost}
        />
      </div>
      <div className={s.posts}>{postElement}</div>
    </>
  );
};

const MyPostsForm = (props) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    props.addPost(data.newPostText);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.posts_form}>
      <textarea
        // className={errors.newPostText ? s.textarea_error : ""}
        {...register("newPostText", {
          required: true,
        })}
        placeholder="Write a post"

        // ref={props.newPostElement}

        // value={props.newPostText}
        // onChange={onPostChange}
      />

      <button
        type="submit"
        //  onClick={onAddPost} type="button"
      >
        Send
      </button>
    </form>
  );
};
export default MyPosts;
