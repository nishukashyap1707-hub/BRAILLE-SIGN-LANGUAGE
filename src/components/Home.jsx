import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main className="home">
      <section className="hero-section">
        <div className="hero-blob blob-a"></div>
        <div className="hero-blob blob-b"></div>

        <div className={"hero-content"}>
          <div className="hero-badge">✦ ACCESSIBILITY • LEARNING • INCLUSION</div>

          <h1>
            Sign <span className="grad-text">&</span> Braille
          </h1>

          <p className="hero-text">
            Learn, explore and communicate without barriers. Discover Sign
            Language and Braille through an interactive learning experience.
          </p>

          <div className="home-buttons">
            <Link to="/sign-language" className="home-button primary-button">
              🤟 Learn Sign Language
            </Link>
            <Link to="/braille" className="home-button secondary-button">
              ⠿ Try Braille Translator
            </Link>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>26</strong>
              <span>Sign Letters</span>
            </div>
            <div className="hero-stat">
              <strong>A–Z</strong>
              <span>Braille Support</span>
            </div>
            <div className="hero-stat">
              <strong>∞</strong>
              <span>Ways to Learn</span>
            </div>
          </div>
        </div>

        <div className={"hero-visual"}>
          <div className="floating-card card-one">
            <img className="floating-photo" src="https://images.unsplash.com/photo-1640550444366-b94e5752c479?w=100&q=80&auto=format&fit=crop" alt="Sign language" />
            <div>
              <strong>Sign Language</strong>
              <small>Learn A–Z</small>
            </div>
          </div>

          <div className="main-visual">
            <img
              className="visual-photo"
              src="https://images.unsplash.com/photo-1640550444366-b94e5752c479?w=600&q=80&auto=format&fit=crop"
              alt="Sign language hand"
            />
            <div className="visual-overlay"></div>
            <div className="visual-text">
              <strong>Communicate</strong>
              <span>Without Limits</span>
            </div>
          </div>

          <div className="floating-card card-two">
            <span>⠿</span>
            <div>
              <strong>Braille</strong>
              <small>Translate instantly</small>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-grid">
          <img
            className="about-photo"
            src="https://images.unsplash.com/photo-1754660242789-8797ffa4b7bd?w=700&q=80&auto=format&fit=crop"
            alt="Reading braille"
          />
          <div className="section-heading">
            <span>ABOUT THE PROJECT</span>
            <h2>
              Making communication more<span className="grad-text"> accessible.</span>
            </h2>
            <p>
              Sign & Braille brings Sign Language and Braille together in one
              simple platform designed for learning, exploration and
              accessibility.
            </p>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-heading">
          <span>EXPLORE</span>
          <h2>Everything you need to learn</h2>
        </div>

        <div className="feature-grid">
          <div className="feature-card purple-card">
            <img className="feature-photo" src="https://images.unsplash.com/photo-1640550444366-b94e5752c479?w=500&q=80&auto=format&fit=crop" alt="Sign language" />
            <div className="feature-body">
              <div className="feature-number">01</div>
              <h2>Sign Language</h2>
              <p>Explore all 26 letters of the Sign Language alphabet with interactive cards.</p>
              <Link to="/sign-language">Explore Signs →</Link>
            </div>
          </div>

          <div className="feature-card blue-card">
            <img className="feature-photo" src="https://images.unsplash.com/photo-1755896487899-5facdc43ea7d?w=500&q=80&auto=format&fit=crop" alt="Braille reading" />
            <div className="feature-body">
              <div className="feature-number">02</div>
              <h2>Braille Translator</h2>
              <p>Convert English text into Braille and listen to your text using speech.</p>
              <Link to="/braille">Try Translator →</Link>
            </div>
          </div>

          <div className="feature-card dark-card">
            <img className="feature-photo" src="https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?w=500&q=80&auto=format&fit=crop" alt="Learning quiz" />
            <div className="feature-body">
              <div className="feature-number">03</div>
              <h2>Interactive Quiz</h2>
              <p>Test your Sign Language knowledge with random questions and instant feedback.</p>
              <Link to="/quiz">Take Quiz →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="how-section">
        <div className="section-heading">
          <span>HOW IT WORKS</span>
          <h2>Learn at your own pace.</h2>
        </div>

        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">01</div>
            <div className="step-line"></div>
            <h3>Explore</h3>
            <p>Choose Sign Language, Braille or Quiz from the navigation menu.</p>
          </div>
          <div className="step-card">
            <div className="step-number">02</div>
            <div className="step-line"></div>
            <h3>Learn</h3>
            <p>Explore signs, translate text and use accessibility features.</p>
          </div>
          <div className="step-card">
            <div className="step-number">03</div>
            <div className="step-line"></div>
            <h3>Test Yourself</h3>
            <p>Take the quiz and see how much you have learned.</p>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div>
          <span>READY TO START?</span>
          <h2>
            Learn. Communicate.
            <br />
            Connect.
          </h2>
        </div>
        <Link to="/sign-language" className="cta-button">
          Start Learning →
        </Link>
      </section>

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <h2>
              Sign<span>&</span>Braille
            </h2>
            <p>Communication should have no barriers.</p>
          </div>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/braille">Braille</Link>
            <Link to="/sign-language">Sign Language</Link>
            <Link to="/quiz">Quiz</Link>
          </div>
        </div>
        <div className="footer-bottom">©️ 2026 Sign & Braille</div>
      </footer>
    </main>
  );
}

export default Home;
