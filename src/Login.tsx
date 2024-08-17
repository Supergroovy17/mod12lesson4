
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', { username, password });
      const token = response.data.token;
      sessionStorage.setItem('jwtToken', token);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;

// Task 4: Create a Login Component with Routes

// Develop a login component named Login that facilitates user login by sending a POST request to the JWT authentication API (https://dummyjson.com/auth/login).
// Implement routing within the React application to navigate to the login component when the user needs to authenticate.