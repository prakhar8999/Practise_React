import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count+1);
  }

  return(
    <>
      <div>
        <button onClick={incrementCount}>Increment</button>
        <h2> { `Click Count is : ${count}` }</h2>
      </div>
    </>
  )
}

export default App
