import React from "react";

const ModalTask = ({ isModalOpen }) => {
  return (
    isModalOpen && (
      <div className="w-[200px] h-[200px] bg-lime-600 absolute">Modaltask</div>
    )
  );
};

export default ModalTask;
