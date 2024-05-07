import { addTodo, updateSearchTerm } from "@/redux/actions";
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import FilterButton from "./FilterButton";

export default function Todo() {
  const dispatch = useDispatch();
  const [newTodoText, setNewTodotext] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodotext("");
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };
  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">Todo App</h2>

      <div className="flex itmes-center mb-4">
        <input
          value={newTodoText}
          onChange={(e) => setNewTodotext(e.target.value)}
          type="text"
          name="addInput"
          id="addInput"
          placeholder="Add Todo"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleAddTodoClick}
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          <BsPlusLg />
        </button>
      </div>

      <div className="flex items-center justify-between">
        <FilterButton />
        <div className="flex items-center mb-4">
          <input
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            type="text"
            name="addInput"
            id="addInput"
            placeholder="search"
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            <IoIosSearch />
          </button>
        </div>
      </div>
    </div>
  );
}
