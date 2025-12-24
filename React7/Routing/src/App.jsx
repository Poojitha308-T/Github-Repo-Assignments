import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
import Todos from "./Todos";

function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/aboutus" element={<About/>} />
            <Route path="/todos" element={<Todos/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default App;