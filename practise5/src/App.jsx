import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};

    if (!username.trim()) {
      errors.username = 'Username is required';
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
    }
    console.log(errors);

    if (Object.keys(errors).length === 0) {
      // Form submission logic (e.g., API call)
      console.log('Submitting form...');
    console.log(`Username : ${username}`)
    console.log(`Password : ${password}`)
    } else {
      setErrors(errors);
    }
    
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setErrors({ ...errors, username: '' });
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrors({ ...errors, password: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login Form</h2>
      <div>
        <label>Username:</label>
        <input 
          type="text" 
          value={username} 
          onChange={handleUsernameChange} 
          placeholder="Enter username" 
        />
        {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={handlePasswordChange} 
          placeholder="Enter password" 
        />
        {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
