import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import * as todoService from "../services/todo.service";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { user } = useAuth();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const res = await todoService.fetchTodos(user.localId);
    const data = res.data || {};
    const formatted = Object.entries(data).map(([id, val]) => ({
      id,
      ...val,
    }));
    setTodos(formatted);
  };

  return (
    <main className="flex-1 p-6">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} refresh={loadTodos} />
      ))}
    </main>
  );
};

export default TodoList;