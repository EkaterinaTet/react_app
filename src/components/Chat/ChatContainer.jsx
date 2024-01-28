import Chat from "./Chat";
import {
  addMessageActionCreator,
  updateNewTextMessageActionCreator,
} from "../../redux/chat-reducer";
import { connect } from "react-redux";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";
import { compose } from "redux";

// import StoreContext from "../../StoreContext";

// const ChatContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         let addMessage = () => {
//           store.dispatch(addMessageActionCreator());
//         };
//         let onMessageChange = (text) => {
//           store.dispatch(updateNewTextMessageActionCreator(text));
//         };
//         return (
//           <Chat
//             dialogNameData={state.chatPage.dialogNameData}
//             messagesData={state.chatPage.messagesData}
//             addMessage={addMessage}
//             updateNewTextMessage={onMessageChange}
//             newMessageText={state.chatPage.newMessageText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogNameData: state.chatPage.dialogNameData,
    messagesData: state.chatPage.messagesData,
    newMessageText: state.chatPage.newMessageText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessageText) => {
      dispatch(addMessageActionCreator(newMessageText));
    },
    // updateNewTextMessage: (text) => {
    //   dispatch(updateNewTextMessageActionCreator(text));
    // },
  };
};

//вместо этого:
// let AuthNavigateComponent = withAuthNavigate(Chat);
// const ChatContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthNavigateComponent);
// export default ChatContainer;

//это:
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthNavigate
)(Chat);
