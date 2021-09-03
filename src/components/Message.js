const Message = ({ children, type }) => {
  return (
    <div className={`message ${type}`}>
      {children}
    </div>
  );
}

export default Message;
