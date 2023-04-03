import React, { useState } from "react";
import CustomDropdown from "./Dropdown";
import Todo from "./Todo";

const options = [
  { value: "personal errands", label: "Personal Errands" },
  { value: "urgent to-do", label: "Urgent To-Do" },
];

const ModalTask = ({ isModalOpen }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    isModalOpen && (
      <div id="modalTask" className=" bg-blue-200 py-6 px-8">
        <div className="flex flex-row justify-between header pb-[22px]">
          <div>
            <CustomDropdown options={options} onSelect={handleSelect} />
            {/* <p>
              Selected option: {selectedOption ? selectedOption.label : "none"}
            </p> */}
          </div>
          <button>New Task</button>
        </div>
        <Todo />
      </div>
    )
  );
};

export default ModalTask;
