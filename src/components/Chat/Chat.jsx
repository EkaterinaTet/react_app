import s from "./Chat.module.css";
import Message from "./Message/Message";
import DialogName from "./DialogName/DialogName";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";

// import {
//   addMessageActionCreator,
//   updateNewTextMessageActionCreator,
// } from "../../redux/chat-reducer";

const Chat = (props) => {
  let dialogElements = props.dialogNameData.map((dialog) => (
    <DialogName key={dialog.id} name={dialog.name} id={dialog.id} /> //  добавила key
  ));

  let messageElements = props.messagesData.map((message) => (
    <Message key={message.id} name={message.name} message={message.message} /> //  добавила key
  ));

  // let onAddMessage = () => {
  //   props.addMessage();
  // };
  // let onMessageChange = (event) => {
  //   let text = event.target.value;
  //   props.updateNewTextMessage(text);
  // };

  return (
    <>
      <div className={s.chat}>
        <div className={s.chat_elements}>
          <ul className={s.chat_element}>{dialogElements}</ul>
        </div>
        <div className={s.messages}>{messageElements}</div>
      </div>
      <div className={s.message_window}>
        <ChatForm addMessage={props.addMessage} />
      </div>
    </>
  );
};

const ChatForm = (props) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    props.addMessage(data.newMessageText); //этот текст необходимо отправить в бизнес
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea
        {...register("newMessageText", {
          required: true,
        })}
        placeholder="Write a message"
        // onChange={onMessageChange}
        // value={props.newMessageText}
      />
      <button
        type="submit"
        // onClick={onAddMessage} type="button"
      >
        Send
      </button>
    </form>
  );
};

export default Chat;
