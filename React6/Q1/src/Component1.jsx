import { AppContext } from "./AppContext";
import Component2 from "./Component2";

function Component1(){
    const a="Apple";
    const b="Ball";
    const c="Cat";
    const d="Dog";
    const e="Elephant";
    const f="Fish";

    return(
        <AppContext.Provider value={{a,b,c,d,e,f}}>
            <h3>Component 1</h3>
            <Component2/>
        </AppContext.Provider>
    )
}
export default Component1;