import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const TodoDetails = () => {
    const {todoId} = useParams();
    const [todo, setTodo] = useState(null);

    useEffect(()=> {
            fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
            .then((response) => response.json())
            .then((data) => setTodos(data))
        }, [todoId]);
    if(!todo){
        return <h3>Loading...</h3>;
    }
        
  return (
    <div>
        <h2>Todo Details</h2>
        <p>ID: {todo.id}</p>
        <p>Title: {todo.title}</p>
        <p>Status: {todo.completed ? "COMPLETED" : "NOT COMPLETED"}</p>
    </div>
  )
}

export default TodoDetails