import { useState } from "react";

const UseState = () => {
  
    type Details = {counter: number, name: string}

  const [details, setDetails] = useState<Details>({counter: 0, name: ""});
  
  const increaseCounter = () => {
    setDetails(prev => ({...prev, counter: prev.counter + 1}));
  }

  const setName = (value: string) => {
    setDetails(prev => ({...prev, name: value}));
  }

  return (
    <div className="grid justify-center text-center mt-10">
      <input className="border mb-8 border-gray-800 p-4 rounded-lg text-2xl" type="text" onChange={event => setName(event.currentTarget.value)}/>
      <h1 className="text-2xl font-semibold">{details.name} has clicked {details.counter} times!</h1>
      <button className="hover:scale-105 transition-all duration-500 hover:cursor-pointer font-bold mt-10 w-fit p-4 bg-green-950 mx-auto text-white text-3xl rounded-2xl" onClick={increaseCounter}>Increase</button>
    </div>
  )
}

export default UseState
