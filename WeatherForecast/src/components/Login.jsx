import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const savedUsername = localStorage.getItem('weatherapp-username');
    const savedPassword = localStorage.getItem('weatherapp-password');
    if (username === savedUsername && password === savedPassword) {
      localStorage.setItem('weatherapp-loggedin', 'yes');
      navigate('/');
    } else {
      setError('Wrong username or password');
    }
  };

  return (
    <div className="auth-bg">
      <form onSubmit={handleLogin} className="login-container">
        <h2>Login to Weather App</h2>
        {error && <div className="error">{error}</div>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;