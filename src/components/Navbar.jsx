import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <svg className="logo-icon" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="19" stroke="#c97b63" strokeWidth="2" />
          <path d="M13 26c2-6 3-10 3-13a4 4 0 118 0c0 4-2 7-4 10" stroke="#c97b63" strokeWidth="2" strokeLinecap="round" fill="none" />
          <circle cx="26" cy="15" r="1.6" fill="#c97b63" />
          <circle cx="26" cy="20" r="1.6" fill="#c97b63" />
          <circle cx="26" cy="25" r="1.6" fill="#c97b63" />
        </svg>
        <span className="logo-text">
          Sign<span>&</span>Braille
        </span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/braille">Braille</Link>
        <Link to="/sign-language">Sign Language</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/settings">Settings</Link>
      </div>

      <div className="nav-auth">
        <Link to="/login" className="nav-login">Login</Link>
        <Link to="/signup" className="nav-signup">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
