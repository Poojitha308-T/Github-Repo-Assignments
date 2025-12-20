import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from './Home';
import ProtectedRoute from "./ProtectedRoute";
import TodoDetails from "./TodoDetails";
import Todos from "./Todos";

function App(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path='/todos' element={<ProtectedRoute>
                    <Todos/>
                </ProtectedRoute>}/>
                <Route path='/todos/:todoId' element={<ProtectedRoute>
                    <TodoDetails/>
                </ProtectedRoute>}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;