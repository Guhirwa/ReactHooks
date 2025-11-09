import { useState, useEffect } from "react"
import Button from "./Button";

const UseEffect = () => {

    const [count, setCount] = useState(1);
    const [otherCount, setOtherCount] = useState(5)

    useEffect(() => {
        document.title = `(${count}) new message!`;
    }, [otherCount, count])

  return (
    <div className="mt-20 flex gap-20 absolute left-1/2 transform -translate-x-1/2">
        <div className="grid justify-center">
            <h3 className="font-semibold text-3xl">{count} new Messages!</h3>
            <Button label="Increase" clickHandler={() => setCount(prev => prev + 1)}/>
        </div>
        <div>
            <h3 className="font-semibold text-3xl">Other Count: {otherCount}</h3>
            <Button label="Increase by five" clickHandler={() => setOtherCount(prev => prev + 5)}/>
        </div>
    </div>
  )
}

export default UseEffect
