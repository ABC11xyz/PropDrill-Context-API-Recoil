import React, { useContext, useState } from 'react'
import { CountContext } from './context';

const App = () => {

  const [count , setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{count , setCount}}>
         <Show />
      </CountContext.Provider>

    </div>
  )
}

function Show () {
  return <div>
    <CounterRender />
    <Buttons />
  </div>
}

function CounterRender () {
  const {count} = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons () {
 const {count , setCount} = useContext(CountContext);
 return <div>
  <button onClick={() => (setCount(count+1))}> Increse</button>
  <button onClick={() => (setCount(count-1))}> Decrease</button>
 </div>
}

export default App
