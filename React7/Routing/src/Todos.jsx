import { useEffect, useState } from "react";
import './App.css';
function Todos(){
    const [todos, setTodos] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response)=>response.json())
        .then((data) =>{
            setTodos(data.slice(0,10));
        })
        .catch((error) => console.error(error));
    },[]);
    return(
        <>
        <h2>Todos</h2>
        <div className="container">
            {todos.map((todo) =>(
                <div className="todo-card" key={todo.id}>
                    <h4>{todo.title}</h4>
                    <p>
                        Status:{" "}
                        <strong>
                            {todo.completed ? "Completed" : "NotCompleted"}
                        </strong>
                    </p>
                </div>
            ))}
        </div>
        </>

    );
}
export default Todos;