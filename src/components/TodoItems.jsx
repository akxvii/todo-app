import TodoItem from "./TodoItem";
import Styles from "./TodoItemsAlign.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div classNameName={Styles.itemscontainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
