import { useState } from "react";

function ComponentA(){
    return <h2>Status is TRUE</h2>;
}

function ComponentB(){
    return <h2>Status is FALSE</h2>;
}

function StatusToggle(){
    const [status, setStatus] = useState(false);

    const handleClick = () =>{
        setStatus(!status);
    };

    return(
        <div>
            <button onClick={handleClick}>Toggle Status</button>
            {status ? <ComponentA/> : <ComponentB/>}
        </div>
    );
}
export default StatusToggle;