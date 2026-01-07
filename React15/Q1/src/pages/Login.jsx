import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";


export default function Login() {
const { login } = useAuth();
const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const submit = async e => {
e.preventDefault();
await login(email, password);
navigate("/todos");
};


return (
<form onSubmit={submit} className="h-screen flex flex-col justify-center items-center gap-4">
<input onChange={e => setEmail(e.target.value)} placeholder="Email" />
<input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
<button>Login</button>
</form>
);
}