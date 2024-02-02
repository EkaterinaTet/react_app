import s from "./Chat.module.css";
import Message from "./Message/Message";
import DialogName from "./DialogName/DialogName";
import { useForm } from "react-hook-form";

const Chat = (props) => {
  let dialogElements = props.dialogNameData.map((dialog) => (
    <DialogName key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  let messageElements = props.messagesData.map((message) => (
    <Message key={message.id} name={message.name} message={message.message} />
  ));

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
    props.addMessage(data.newMessageText); //sending this text to business
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea
        {...register("newMessageText", {
          required: true,
        })}
        placeholder="Write a message"
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default Chat;
