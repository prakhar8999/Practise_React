import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [movieName, setmovieName] = useState('')
  const [movieTitle, setmovieTitle] =useState('')
  const [releaseYear,setreleaseYear] = useState('')
  const [allData, setAllData] = useState({})

  const searchMovie = (name) => {
    fetch(`https://www.omdbapi.com/?t=${name}&apikey=226e8e0a`)
    .then(response => response.json())
    .then(data => {
      setAllData(data);
      setmovieTitle(data.Title);
      setreleaseYear(data.Year);
    })
  }

  return (
    <div>
      <input type="text" onChange={(e) => setmovieName(e.target.value)} value={movieName}/>
      <br />
      <button onClick={() => searchMovie(movieName)}>Search</button>
      <h3>Movie Title : {movieTitle} </h3>
      <h3>Release Year : {releaseYear} </h3>
    </div>
  )
}

export default App
