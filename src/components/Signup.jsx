import { Link } from "react-router-dom";
import "./Auth.css";

function Signup() {
  return (
    <main className="auth-page">
      <div className="auth-box">
        <p className="tagline">JOIN US</p>
        <h1>Create Account</h1>
        <p className="auth-sub">Sign up to start learning Sign & Braille.</p>

        <label>Full Name</label>
        <input type="text" placeholder="Your name" readOnly />

        <label>Email</label>
        <input type="email" placeholder="you@example.com" readOnly />

        <label>Password</label>
        <input type="password" placeholder="••••••••" readOnly />

        <button className="auth-button" disabled>Sign Up</button>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </main>
  );
}

export default Signup;
