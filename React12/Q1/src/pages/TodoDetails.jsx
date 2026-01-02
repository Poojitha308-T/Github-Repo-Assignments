import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTodoById } from "../api/todoService";

const TodoDetails = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    getTodoById(id).then(setTodo);
  }, [id]);

  if (!todo) return <p>Loading...</p>;

  return (
    <div>
      <h2>Todo Details</h2>

      <p><strong>ID:</strong> {todo.id}</p>
      <p><strong>Title:</strong> {todo.title}</p>
      <p>
        <strong>Status:</strong>{" "}
        {todo.completed ? "Completed" : "Not Completed"}
      </p>

      <Link to="/">← Back to Todo List</Link>
    </div>
  );
};

export default TodoDetails;
