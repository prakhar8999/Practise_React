import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Deploy project', completed: false }
  ]);

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed : !todo.completed} : todo ));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} onChange={() => handleToggleComplete(todo.id)} />
            <label style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
