import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { countAtom, evenSelector } from './store/atoms/count';

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
    <b>
      {count}
    </b>
    <EvenCountRender />
    
  </div>
}

function EvenCountRender () {
  const isEven =  useRecoilValue(evenSelector);

  return <div>
    {isEven ? "It is Even" : null}
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
