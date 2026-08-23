import { Link } from "react-router-dom";
import "./Auth.css";

function Login() {
  return (
    <main className="auth-page">
      <div className="auth-box">
        <p className="tagline">WELCOME BACK</p>
        <h1>Login</h1>
        <p className="auth-sub">Login to continue your learning journey.</p>

        <label>Email</label>
        <input type="email" placeholder="you@example.com" readOnly />

        <label>Password</label>
        <input type="password" placeholder="••••••••" readOnly />

        <button className="auth-button" disabled>Login</button>

        <p className="auth-switch">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </main>
  );
}

export default Login;
