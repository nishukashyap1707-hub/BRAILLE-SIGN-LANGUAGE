import { Link } from "react-router-dom";
import "./Admin.css";

function Admin() {
  return (
    <main className="admin-locked">
      <div className="lock-box">
        <div className="lock-icon">🔒</div>
        <p className="tagline">RESTRICTED AREA</p>
        <h1>Admin Access Locked</h1>
        <p className="lock-sub">
          This panel is only accessible to admin accounts. Please log in with
          admin credentials to continue.
        </p>
        <Link to="/login" className="lock-button">Login as Admin</Link>
      </div>
    </main>
  );
}

export default Admin;
