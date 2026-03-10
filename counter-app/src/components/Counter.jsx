import { useState } from "react";
import "./Counter.css";

function Counter() {

  const [count,setCount] = useState(0)

  const MIN = 0
  const MAX = 10

  const increment = () =>{
    if(count < MAX){
      setCount(count + 1)
    }
  }

  const decrement = () =>{
    if(count > MIN){
      setCount(count - 1)
    }
  }

  const reset = () =>{
    setCount(0)
  }

  return (

    <div className="container">

      <div className="counter-box">

        <h1>React Counter</h1>

        <div className="counter-value">{count}</div>

        <button className="btn increment" onClick={increment}>Increment</button>

        <button className="btn decrement" onClick={decrement}>Decrement</button>

        <button className="btn reset" onClick={reset}>Reset</button>

      </div>

    </div>

  )
}

export default Counter