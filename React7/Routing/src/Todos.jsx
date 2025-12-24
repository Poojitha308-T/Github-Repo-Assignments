import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <nav>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                    <Link to="/aboutus">About</Link>
                    <Link to="/todos">Todos</Link>
                </li>
            </ul>
        </nav>
        <h2>Todos</h2>
        <div>
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