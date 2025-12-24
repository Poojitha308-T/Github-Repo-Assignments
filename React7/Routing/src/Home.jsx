import { Link } from 'react-router-dom';

function Home(){
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
        <h2>This is Home Page</h2>
        </>
    )
}
export default Home;