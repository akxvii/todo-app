import { useRef } from "react";
import inputStyles from "./TodoInput.module.css";
import { IoIosAddCircle } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const todoItemElement = useRef();
  const dueDateElement = useRef();

  const handleaddButtonClicked = () => {
    const todoName = todoItemElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoItemElement.current.value = "";
    dueDateElement.current.value = "";

    onNewItem(todoName, dueDate);
  };

  return (
    <div classNameName="container text-center">
      <div classNameName="row kg-row">
        <div classNameName="col-6">
          <input
            classNameName={inputStyles.TodoInput}
            type="text"
            ref={todoItemElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div classNameName="col-4">
          <input
            classNameName={inputStyles.TodoInput}
            type="date"
            ref={dueDateElement}
          />
        </div>
        <div classNameName="col-2">
          <button
            type="button"
            classNameName="btn btn-success kg-button"
            onClick={handleaddButtonClicked}
          >
            <IoIosAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
