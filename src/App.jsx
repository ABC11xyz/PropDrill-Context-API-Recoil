import React, { useContext, useState } from 'react'
import { CountContext } from './context';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { countAtom } from './store/atoms/count';

const App = () => {

  return (
    <div>
       <RecoilRoot>
          <Show />
       </RecoilRoot>
      
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
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Buttons () {
 const [count , setCount] = useRecoilState(countAtom)
 return <div>
  <button onClick={() => (setCount(count+1))}> Increse</button>
  <button onClick={() => (setCount(count-1))}> Decrease</button>
 </div>
}

export default App
