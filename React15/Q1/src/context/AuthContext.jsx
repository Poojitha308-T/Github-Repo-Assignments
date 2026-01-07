import { createContext, useEffect, useState } from "react";
import { authService } from "../services/auth.service";


export const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);


useEffect(() => {
const unsubscribe = authService.subscribe(setUser);
setLoading(false);
return unsubscribe;
}, []);


return (
<AuthContext.Provider value={{ user, ...authService }}>
{!loading && children}
</AuthContext.Provider>
);
};