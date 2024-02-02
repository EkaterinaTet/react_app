import Chat from "./Chat";
import { addMessageActionCreator } from "../../redux/chat-reducer";
import { connect } from "react-redux";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";
import { compose } from "redux";

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
  };
};

//instead of this:
// let AuthNavigateComponent = withAuthNavigate(Chat);
// const ChatContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthNavigateComponent);
// export default ChatContainer;

//this:
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthNavigate
)(Chat);
