import React from "react";

const ModalTask = ({ isModalOpen }) => {
  return (
    isModalOpen && (
      <div id="modalTask" className=" bg-lime-600 ">
        Modaltask
      </div>
    )
  );
};

export default ModalTask;
