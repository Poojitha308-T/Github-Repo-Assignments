const Sidebar = ({ todos = [], selectedId, onSelect }) => {
  return (
    <aside className="w-64 border-r p-4 overflow-y-auto">
      <h2 className="font-semibold mb-4">Todos</h2>
      {todos.map((todo) => (
        <div
          key={todo.id}
          onClick={() => onSelect(todo.id)}
          className={`p-2 cursor-pointer rounded ${
            selectedId === todo.id ? "bg-gray-200" : ""
          }`}
        >
          {todo.title}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;