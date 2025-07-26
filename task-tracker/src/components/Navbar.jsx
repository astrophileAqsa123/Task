import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser, logout } from "../utils/auth";
import "./Navbar.css";

export default function Navbar() {
  const user = getCurrentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/profile" className="nav-link">Profile</Link>
        {!user && (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </>
        )}
        {user && (
          <button onClick={handleLogout} className="logout-button">Logout</button>
        )}
      </div>
    </nav>
  );
}
