import React from "react";
function Parent(){
  const name = "Poojitha"
  const age = 22;
  return(
    <div>
      <A name={name}/>
      <A age={age}/>
    </div>
  )
}

function A({name,age}){
  return(
    <div>
      <B name={name}/>
      <B age={age}/>
    </div>
  )
}

function B({name,age}){
  return(
    <div>
      <C name={name}/>
      <C age={age}/>
    </div>
  )
}

function C({name,age}){
  return(
    <div>
      <p> Name:{name}</p>
      <p> Age:{age}</p>
    </div>
  )
}

export default App(){
  return(
    <div>
    <Parent/>
    </div>
  )
}