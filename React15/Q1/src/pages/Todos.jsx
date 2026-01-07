import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import Footer from "../layout/Footer";
import TodoList from "../todos/TodoList";

const Todos = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <TodoList />
      </div>
      <Footer />
    </div>
  );
};

export default Todos;