import { useEffect, useState } from "react";

function UserData(){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => response.json())
        .then((data) => {
            setUser(data);
            setLoading(false);
        })
        .catch((error) => {
            console.log("Error fetching user data:", error);
            setLoading(false);
        })
    },[]);

    if(loading) {
        return <p>Loading...</p>
    }

    return(
        <div>
            <h2>User Data</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </div>
    );
}

export default UserData;