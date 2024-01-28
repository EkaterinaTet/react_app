import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profile-reducer";

let state = {
  postData: [
    {
      id: 1,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, reprehenderit!",
      like: 15,
    },
    { id: 2, message: "Hello, how are you?", like: 5 },
    { id: 3, message: "How are you?", like: 10 },
    { id: 4, message: "Good day!)", like: 20 },
  ],
};

it("checking that the correct message is being added", () => {
  let action = addPostActionCreator("Hello");
  let newState = profileReducer(state, action);
  expect(newState.postData[4].message).toBe("Hello");
});

it("length of posts should be incremented", () => {
  let action = addPostActionCreator("Hello");
  let newState = profileReducer(state, action);
  expect(newState.postData.length).toBe(5);
});

//tdd
it("after deleting length of messages should be decrement", () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.postData.length).toBe(3);
});

it("incorrect id", () => {
  let action = deletePost(1000);
  let newState = profileReducer(state, action);
  expect(newState.postData.length).toBe(4);
});
