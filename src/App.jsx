import React, { useState } from 'react'

const App = () => {

  const [count , setCount] = useState(0);

  return (
    <div>
      <Count count = {count} setCount = {setCount}/>
      
    </div>
  )
}

function Count ({count}) {
  return <div>
    {count}
    <Buttons count = {count} setCount = {setCount} />
  </div>
}

function Buttons ({count , setCount}) {
 return <div>
  <button onClick={() => (setCount(count+1))}> Increse</button>
  <button onClick={() => (setCount(count-1))}> Decrease</button>
 </div>
}

export default App
