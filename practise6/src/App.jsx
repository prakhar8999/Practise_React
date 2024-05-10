import { useState } from 'react'
import './App.css'

function App() {
  const [celsius, setcelsius] = useState(0)
  const [fahrenheit,setfahrenheit] = useState(32)

  const convertCelsius =  (event) => {
    const value = event.target.value;
    setcelsius(value);
    let convertedValue = (celsius * 1.8) + 32;
    setfahrenheit(convertedValue);
  }

  const convertFahrenheit = (event) => {
    const value = event.target.value;
    setfahrenheit(value)
    let convertedValue = (fahrenheit - 32) * (5/9);
    setcelsius(convertedValue);
  }


  return (
    <div>
      <label htmlFor="">Enter Value in degree Celsius : </label>
      <input type="number" value={celsius} onChange={convertCelsius} />
      <br />
      <label htmlFor="">Enter Value in degree Fahrenheit : </label>
      <input type="number" value={fahrenheit} onChange={convertFahrenheit} />
    </div>
  )
}

export default App
