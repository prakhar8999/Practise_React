import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [selectedColor, setselectedColor] = useState('')
  const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];

  const handleClick = (color) => {
    setselectedColor(color);
  }

  return (
    <div>
      <h2>Color Picker!!</h2>
      <ul>
        {colors.map((color) => (
          <li key={color}>
            <button onClick={() => handleClick(color)}>{color}</button>
          </li>
          ))}
      </ul>
      {selectedColor && <h3>Selected Color : {selectedColor}</h3>}
    </div>
  )
}

export default App
