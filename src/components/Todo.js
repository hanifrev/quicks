import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import clock from "../assets/clock.svg";
import description from "../assets/description.svg";
import expand from "../assets/expand.svg";
import moment from "moment";

const Todo = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [dueDate, setDueDate] = useState(null);
  const [desc, setDesc] = useState("");
  const [theForm, setTheForm] = useState(false);
  const [accordion, setAccordion] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      { text: inputValue, completed: false, dueDate, description: desc },
    ]);
    setInputValue("");
    setDueDate(null);
    setDesc("");
    setTheForm(false);
  };

  useEffect(() => {
    setTheForm(addTask);
  }, [addTask]);

  const handleCheckbox = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleCalendar = (date, index) => {
    const newTodos = [...todos];
    newTodos[index].dueDate = date;
    setTodos(newTodos);
  };

  const handleDescription = (e, index) => {
    const newTodos = [...todos];
    newTodos[index].description = e.target.value;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div id="todo">
      {theForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type Task Title"
            className="inputTitle text-black bg-transparent"
          />
          <div className="flex flex-row pl-9 pt-3">
            <Image src={clock} alt="img" className="w-[20px] mr-[18px]" />
            <DatePicker
              placeholderText="Set Date"
              selected={dueDate}
              onChange={(date) => setDueDate(date)}
              className="bg-transparent datePick text-black"
            />
          </div>
          <div className="flex flex-row pl-9 pt-3">
            <Image
              src={description}
              alt="img"
              className="w-[15px] mr-[18px] -mt-[17px]"
            />
            <textarea
              value={desc}
              placeholder="No Description"
              onChange={(e) => setDesc(e.target.value)}
              className="bg-transparent textarea text-black"
            />
          </div>
          <div className="flex flex-row gap-4 justify-end my-4 cta">
            <button onClick={() => setTheForm(false)}>Cancel</button>
            <button>Add</button>
          </div>
        </form>
      )}

      {todos.map((todo, index) => (
        <div key={index} className="todo-item text-black flex flex-col">
          <div
            className={`flex flex-row justify-between ${
              accordion ? "pb-3" : "pb-[19.5px]"
            }`}
          >
            <label className="flex flex-row ">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCheckbox(index)}
                className="check"
              />
              <p className="font-bold text-lg">{todo.text}</p>
            </label>
            <div className="flex flex-row">
              <div className="text-[#EB5757] text-sm mr-5 mt-1">
                {moment(todo.dueDate).diff(moment(), "days")} days left
              </div>
              <div className="text-sm mr-[10px] mt-1">
                {moment(todo.dueDate).format("MM/DD/YYYY")}
              </div>
              <div
                className={`mr-[10px] pt-[5px] ${
                  accordion ? "transform rotate-180" : ""
                }`}
                onClick={() => setAccordion(!accordion)}
              >
                <Image src={expand} alt="img" />
              </div>
              <div onClick={() => deleteTodo(index)}>Delete</div>
            </div>
          </div>

          {accordion && (
            <div className="accordion" key={index}>
              <div className="flex flex-row pl-9">
                <Image src={clock} alt="img" className="w-[20px] mr-[18px]" />
                <DatePicker
                  selected={todo.dueDate}
                  onChange={(date) => handleCalendar(date, index)}
                  className="bg-transparent datePick"
                />
              </div>
              <div className="flex flex-row pl-9 pt-[13px]">
                <Image
                  src={description}
                  alt="img"
                  className="w-[15px] mr-[18px] -mt-5"
                />
                <textarea
                  value={todo.description}
                  placeholder="No Description"
                  onChange={(e) => handleDescription(e, index)}
                  className="bg-transparent p-[15px] ml-1"
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Todo;
