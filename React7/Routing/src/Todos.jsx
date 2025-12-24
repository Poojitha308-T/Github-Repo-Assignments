import { useEffect } from "react";
import { Link } from "react-router-dom";

function Todos(){
    useEffect=()=>(
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response=>response.json)
        .then(data.slice(0,10))
    )
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
        </>
    )
}
export default Todos;