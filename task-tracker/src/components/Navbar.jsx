// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser, logout } from "../utils/auth";

export default function Navbar() {
  const user = getCurrentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/profile" style={styles.link}>Profile</Link>
        {!user && (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.link}>Register</Link>
          </>
        )}
      </div>
      {user && (
        <button onClick={handleLogout} style={styles.button}>Logout</button>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    padding: "1rem",
    backgroundColor: "#f5f5f5",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: {
    marginRight: "1rem",
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
  },
  button: {
    background: "crimson",
    color: "white",
    border: "none",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    borderRadius: "5px",
  },
};
