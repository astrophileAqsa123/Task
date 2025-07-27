import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    try {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser && parsedUser.name && parsedUser.email) {
        setUser(parsedUser);
      } else {
        navigate("/login");
      }
    } catch (err) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome, {user.name}!</h1>
      <p style={styles.email}><strong>Email:</strong> {user.email}</p>
      <button onClick={handleLogout} style={styles.button}>Logout</button>
    </div>
  );
};

export default Profile;

const styles = {
  container: {
    maxWidth: "500px",
    margin: "4rem auto",
    padding: "2rem",
    backgroundColor: "#f0f0f0",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1rem",
    color: "#333",
  },
  email: {
    fontSize: "1.1rem",
    marginBottom: "2rem",
    color: "#555",
  },
  button: {
    backgroundColor: "#d9534f",
    color: "#fff",
    border: "none",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    borderRadius: "5px",
    cursor: "pointer",
  }
};
