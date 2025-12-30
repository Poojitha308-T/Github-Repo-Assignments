import React from "react";
function HeavyComponent(){
    console.log("HeavyComponent rendered");

    let total = 0;
    for(let i=0;i<10000000;i++)  {
        total += i;
    }

    return(
        <div style={{ marginTop: "20px" }}>
            <h2>Heavy UI Component</h2>
            <p>Expensive calculation result: {total}</p>
        </div>
    );

}
export default React.memo(HeavyComponent);