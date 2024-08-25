import React, { useContext, useState } from 'react'
import { CountContext } from './context';

const App = () => {

  const [count , setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={count}>
         <Show setCount = {setCount}/>
      </CountContext.Provider>

    </div>
  )
}

function Show ({setCount}) {
  return <div>
    <CounterRender />
    <Buttons  setCount = {setCount} />
  </div>
}

function CounterRender () {
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons ({setCount}) {
 const count = useContext(CountContext);
 return <div>
  <button onClick={() => (setCount(count+1))}> Increse</button>
  <button onClick={() => (setCount(count-1))}> Decrease</button>
 </div>
}

export default App
