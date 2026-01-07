import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <h1 className="text-xl font-bold">Todos App</h1>

      <div className="flex gap-4 items-center">
        <button className="text-sm">All</button>
        <button className="text-sm">Completed</button>
        <button className="text-sm">Pending</button>

        {user && (
          <button
            onClick={logout}
            className="px-4 py-1 border rounded"
          >
            Sign Out
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;