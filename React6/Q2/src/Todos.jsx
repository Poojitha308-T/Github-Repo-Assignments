import { useState } from "react";
import { TodoContext } from "./TodoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function Todos() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title
      }
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      <h2>Todo App (Context API)</h2>
      <AddTodo />
      <TodoList />
    </TodoContext.Provider>
  );
}

export default Todos;
