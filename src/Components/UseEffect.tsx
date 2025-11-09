import { useState } from "react"

const UseEffect = () => {

    const [count, setCount] = useState(0);

  return (
    <div>
        <h3>{count} new Messages!</h3>
        <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
    </div>
  )
}

export default UseEffect
