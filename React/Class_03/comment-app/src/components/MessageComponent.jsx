import React from "react";

const MessageComponent = props => (
  <div className="message-component">
    <div className="sender">{props.sender}</div>
    <div className="message-content">{props.message}</div>
  </div>
);

export default MessageComponent;
