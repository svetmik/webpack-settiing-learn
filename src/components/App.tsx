import React, { useState } from "react"

const App = () => {

  const [count, setCount] = useState(0);

  function a () {
    setCount(count => count + 1);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={a}>клик</button>
    </div>
  )
}

export default App;