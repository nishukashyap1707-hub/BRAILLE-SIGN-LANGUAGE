import "./Settings.css";

function Settings() {
  return (
    <main className="settings-page">
      <div className="settings-box">
        <p className="tagline">SETTINGS</p>
        <h1>Account Settings</h1>

        <div className="settings-section">
          <h3>Profile</h3>
          <label>Full Name</label>
          <input type="text" defaultValue="Nishtha Sharma" readOnly />
          <label>Email</label>
          <input type="email" defaultValue="nishtha@example.com" readOnly />
        </div>

        <div className="settings-section">
          <h3>Preferences</h3>
          <div className="settings-row">
            <span>Text-to-Speech</span>
            <div className="toggle on"></div>
          </div>
          <div className="settings-row">
            <span>Dark Mode</span>
            <div className="toggle"></div>
          </div>
          <div className="settings-row">
            <span>Email Notifications</span>
            <div className="toggle on"></div>
          </div>
        </div>

        <button className="save-button" disabled>Save Changes</button>
      </div>
    </main>
  );
}

export default Settings;
