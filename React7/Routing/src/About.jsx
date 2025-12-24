import { Link } from "react-router-dom";

function About(){
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
        <h2>This is About Us Page</h2>
        </>
    )
}
export default About;