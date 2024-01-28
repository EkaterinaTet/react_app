import s from "./../Chat.module.css";

const Message = (props) => {
  return (
    <div className={s.message_item}>
      <span>{props.name}</span>
      <div className={s.message}>{props.message}</div>
    </div>
  );
};
export default Message;
