import React from "react";
import MessageList from "./MessageList";

const ModalInbox = ({ isModalOpen }) => {
  return (
    isModalOpen && (
      <div id="modalInbox" className=" bg-white">
        <div className="flex flex-row">
          <input
            type="search"
            className="bg-transparent mt-5 mx-auto p-[10px] text-black flex"
            placeholder="Search"
          />
        </div>
        <MessageList />
      </div>
    )
  );
};

export default ModalInbox;
