import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [quote, setQuote] = useState('')

  const fetchQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {setQuote(data.content)})
    };

    useEffect(() => {
      fetchQuote();
    },[]);

  return (
    <div>
      <h3>{quote}</h3>
      <br />
      <button onClick={fetchQuote}>Fetch New Quote</button>
    </div>
  )
}

export default App
