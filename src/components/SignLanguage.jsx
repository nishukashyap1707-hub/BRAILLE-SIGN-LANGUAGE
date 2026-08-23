import signData from "../data/signData";
import "./SignLanguage.css";

function SignLanguage() {
  return (
    <main className="sign-page">
      <section className="sign-header">
        <p className="tagline">SIGN LANGUAGE</p>
        <h1>Sign Language Alphabet</h1>
        <p>Learn the alphabet using simple Sign Language hand signs.</p>

        <div className="sign-search-box">
          <input className="sign-search" type="text" placeholder="Search a letter..." maxLength="1" readOnly />
        </div>
      </section>

      <section className="sign-container">
        {signData.map((item) => (
          <div className="sign-card" key={item.letter}>
            <img src={item.image} alt={`Sign for ${item.letter}`} />
            <h2>{item.letter}</h2>
            <p>Click to view</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default SignLanguage;
