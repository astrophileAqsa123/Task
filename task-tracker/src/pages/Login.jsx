import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();


    const user = {
      name,
      email,
    };
    localStorage.setItem("user", JSON.stringify(user));

    navigate("/profile"); 
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default LogIn;

const styles = {
  container: {
    maxWidth: "400px",
    margin: "5rem auto",
    padding: "2rem",
    background: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  heading: {
    marginBottom: "1.5rem",
    fontSize: "1.8rem",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "0.8rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "0.8rem",
    background: "#007bff",
    color: "#fff",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

