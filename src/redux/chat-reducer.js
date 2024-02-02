const ADD_MESSAGE = "chat/ADD-MESSAGE";

let initialState = {
  dialogNameData: [
    { id: 1, name: "Tom" },
    { id: 2, name: "Olya" },
    { id: 3, name: "Kate" },
    { id: 4, name: "Oleg" },
  ],
  messagesData: [
    { id: 1, name: "Name", message: "Hi. My name is Tom." },
    { id: 2, name: "Me", message: "How are you?" },
    {
      id: 3,
      name: "Name",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atquefacere cupiditate rerum similique iste, possimus consectetur quaseum amet! Magnam.",
    },
  ],
};
const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let text = action.newMessageText;
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: 4, name: "Name", message: text },
        ],
      };
    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessageText) => {
  return {
    type: ADD_MESSAGE,
    newMessageText,
  };
};

export default chatReducer;
