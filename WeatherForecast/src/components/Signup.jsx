import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();
    if (!username || !password) {
      setError("Please fill all fields");
      return;
    }
    localStorage.setItem("weatherapp-username", username);
    localStorage.setItem("weatherapp-password", password);
    alert("Signup successful! Please log in.");
    navigate("/login");
  }

  return (
    <div className="auth-bg">
      <form onSubmit={handleSignup} className="auth-container">
        <h2>Sign Up to Weather App</h2>
        {error && <div className="error">{error}</div>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;