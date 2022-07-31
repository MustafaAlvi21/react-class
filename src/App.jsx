import { useState } from "react";
import Login from "./components/bg"



// Component
function App() {

  const [count, setCount] = useState(0);
  
  function increment() {
    setCount(count + 1)
  }
  function decrement() {
    setCount(count - 1)
  }

  return (
    <>
      <div className="bg">
        <Login />
      
        <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", flexDirection: "column" }}>
          <h1>Counter: {count}</h1>
          <div>
            <button onClick={() => increment()} style={{ padding: "20px"}}>+</button>
          </div>
          <div>
            <button onClick={() => decrement()} style={{ padding: "20px"}}>-</button>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;