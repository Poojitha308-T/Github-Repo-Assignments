import { lazy, Suspense, useState } from "react";

const HeavyComponent = lazy(() => import("./HeavyComponent"));

function App(){
  const [count, setCount] = useState(0);

  console.log("App rendered");

  return(
    <div>
      <h1>React.memo & Lazy Loading</h1>

      <button onClick={()=> setCount(count+1)}>Counter: {count}</button>

      <Suspense fallback={<p>Loading Heavy Component...</p>}>
      <HeavyComponent/>
      </Suspense>
    </div>
  )

}
export default App;