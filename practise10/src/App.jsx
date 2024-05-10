import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [allQuestion, setallQuestion] = useState([])

  const fetchQuestion = () => {
    fetch('https://opentdb.com/api.php?amount=10&type=multiple')
    .then(response => response.json())
    .then(data => setallQuestion(data.results))
  }

  // useEffect(() => {
  //   fetchQuestion()
  // }, [])

  return (
    <div>
      <h2>Mutiple Choice Test</h2>
      <br />
      <button onClick={fetchQuestion}>Start Test</button>
      <ul>
        {allQuestion.map((ques) => (
          <li key={ques.correct_answer}>{ques.question}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
