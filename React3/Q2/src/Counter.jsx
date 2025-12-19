import { useEffect, useState } from "react";

function Counter(){
    const [count, setCount]=useState(0);

    useEffect(()=> {
        if(count !== 0 && count%3 === 0) {
            alert(`The current number ${count} is divisible by 3`);
        }
    },[count]);
    return(
        <div>
            <h2>Couter</h2>
            <p> Current count: {count}</p>
            <button onClick={()=> setCount(count+1)}>
                Increase</button>
        </div>
    )
}
export default Counter;