import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import * as todoService from "../services/todo.service";
import UpdateTodoModal from "./UpdateTodoModal";

const TodoItem = ({ todo, refresh }) => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  const toggleStatus = async () => {
    await todoService.updateTodo(user.localId, todo.id, {
      completed: !todo.completed,
    });
    refresh();
  };

  const deleteTodo = async () => {
    await todoService.deleteTodo(user.localId, todo.id);
    refresh();
  };

  return (
    <div className="flex items-center justify-between mb-2 border p-3 rounded">
      <span
        className={`cursor-pointer ${
          todo.completed ? "line-through" : ""
        }`}
        onClick={toggleStatus}
      >
        {todo.title}
      </span>

      <div className="flex gap-2">
        <button onClick={() => setOpen(true)}>Edit</button>
        <button onClick={deleteTodo}>Delete</button>
      </div>

      <UpdateTodoModal
        open={open}
        onClose={() => setOpen(false)}
        value={todo.title}
        onSave={async (val) => {
          await todoService.updateTodo(user.localId, todo.id, {
            title: val,
          });
          setOpen(false);
          refresh();
        }}
      />
    </div>
  );
};

export default TodoItem;