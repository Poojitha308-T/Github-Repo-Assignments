import { useContext } from "react";
import { TodoContext } from "./TodoContext";

function TodoItem({ todo }) {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <div>
      <span>{todo.title}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
