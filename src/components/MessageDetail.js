import React from "react";

const MessageDetail = ({ onClose }) => {
  return (
    <div id="modalInboxDetail" className=" bg-blue-400 py-6 px-8">
      <div onClick={() => onClose(false)}>X</div>
      MessageDetail
    </div>
  );
};

export default MessageDetail;
