//store вручную

import profileReducer from "./profile-reducer";
import chatReducer from "./chat-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  //приватные
  _state: {
    profilePage: {
      postData: [
        {
          id: 1,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, reprehenderit!",
          like: 15,
        },
        { id: 2, message: "Hello, how are you?", like: 20 },
      ],
      newPostText: "Write something",
    },
    chatPage: {
      dialogNameData: [
        { id: 1, name: "Tom" },
        { id: 2, name: "Olya" },
        { id: 3, name: "Kate" },
        { id: 4, name: "Oleg" },
      ],
      messagesData: [
        //поправка с id
        { id: 1, name: "Name", message: "Hi. My name is Tom." },
        { id: 2, name: "Me", message: "How are you?" },
        {
          id: 3,
          name: "Name",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atquefacere cupiditate rerum similique iste, possimus consectetur quaseum amet! Magnam.",
        },
      ],
      newMessageText: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("hello");
  },
  //интерфейсные методы
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; //паттерн (наблюдатель)
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.chatPage = chatReducer(this._state.chatPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;

// window.store = store;
