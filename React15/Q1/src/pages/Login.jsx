import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    await login(email, password);
    navigate("/todos");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-90 space-y-4">
        <div>Email : 
        <input
        type="email"
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
          class="border-2 rounded px-2 ml-2"
        />
        </div>
        <div>Password : 
        <input
          type="password"
          placeholder="Enter your Password"
          onChange={(e) => setPassword(e.target.value)}
          class="border-2 rounded px-2 ml-2"
        />
        </div>
        <div>
          <button onClick={submit} className="btn-primary">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;