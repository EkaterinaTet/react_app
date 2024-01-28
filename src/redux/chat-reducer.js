const ADD_MESSAGE = "chat/ADD-MESSAGE";
// const UPDATE_NEW_TEXT_MESSAGE = "UPDATE-NEW-TEXT-MESSAGE";

let initialState = {
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
    // let newMessage = {
    //   id: 4,
    //   name: "Name",
    //   message: state.newMessageText,
    // };
    // let stateCopy = structuredClone(state);
    // stateCopy.messagesData.push(newMessage);
    // stateCopy.newMessageText = "";
    // return stateCopy;

    // case UPDATE_NEW_TEXT_MESSAGE:
    //   return {
    //     ...state,
    //     newMessageText: action.newText,
    //   };

    // let stateCopy = structuredClone(state);
    // stateCopy.newMessageText = action.newText;
    // return stateCopy;

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
// export const updateNewTextMessageActionCreator = (text) => {
//   return {
//     type: UPDATE_NEW_TEXT_MESSAGE,
//     newText: text,
//   };
// };

export default chatReducer;
