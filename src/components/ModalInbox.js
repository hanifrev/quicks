import React from "react";

const ModalInbox = ({ isModalOpen }) => {
  return (
    isModalOpen && (
      <div className="w-[200px] h-[200px] bg-white absolute">ModalInbox</div>
    )
  );
};

export default ModalInbox;
