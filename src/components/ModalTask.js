import React, { useState } from "react";
import CustomDropdown from "./Dropdown";
import Todo from "./Todo";

const options = [
  { value: "personal errands", label: "Personal Errands" },
  { value: "urgent to-do", label: "Urgent To-Do" },
];

const ModalTask = ({ isModalOpen }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [newTask, setNewTask] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    isModalOpen && (
      <div id="modalTask" className=" bg-white py-6 px-8">
        <div className="flex flex-row justify-between header pb-[22px]">
          <div>
            <CustomDropdown options={options} onSelect={handleSelect} />
          </div>
          <button onClick={() => setNewTask(!newTask)}>New Task</button>
        </div>
        <Todo addTask={newTask} />
      </div>
    )
  );
};

export default ModalTask;
