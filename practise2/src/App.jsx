import { useState } from 'react'
import Greet from './component/greet'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    //<Greet name="Prakhar" />
    <Greet/>
  )
}

export default App
