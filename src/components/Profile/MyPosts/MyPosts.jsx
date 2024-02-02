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

  return (
    <>
      <div className={s.profile_posts}>
        <MyPostsForm addPost={props.addPost} />
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
        {...register("newPostText", {
          required: true,
        })}
        placeholder="Write a post"
      />

      <button type="submit">Send</button>
    </form>
  );
};
export default MyPosts;
