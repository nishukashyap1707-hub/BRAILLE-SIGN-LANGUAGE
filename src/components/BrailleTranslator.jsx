import "./BrailleTranslator.css";

function BrailleTranslator() {
  return (
    <main className="braille-page">
      <section className="braille-box">
        <p className="tagline">BRAILLE TRANSLATOR</p>
        <h1>English → Braille</h1>
        <p className="braille-description">
          Enter English text and convert it into Braille.
        </p>

        <input className="braille-input" type="text" placeholder="Type something here..." readOnly />

        <div className="braille-buttons">
          <button disabled>Translate</button>
          <button disabled>Clear</button>
          <button disabled>🔊 Listen</button>
        </div>

        <div className="result-section">
          <h2>Braille Result</h2>
          <div className="braille-result">⠓⠑⠇⠇⠕</div>
          <button className="copy-button" disabled>Copy Braille</button>
        </div>
      </section>
    </main>
  );
}

export default BrailleTranslator;
