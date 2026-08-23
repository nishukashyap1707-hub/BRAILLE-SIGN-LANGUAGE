import signData from "../data/signData";
<<<<<<< HEAD
=======
// import signData from "../data/brailleData";
>>>>>>> 1a543c02d89be61ff235262c3293669088c4ffea
import "./Quiz.css";

function Quiz() {
  const current = signData[3];
  const options = [signData[0], signData[1], signData[2], signData[3]];

  return (
    <main className="quiz-page">
      <div className="quiz-box">
        <div className="quiz-top">
          <p className="tagline">SIGN LANGUAGE QUIZ</p>
          <div className="quiz-score">
            Score: <strong>0</strong>
          </div>
        </div>

        <div className="progress-info">
          <span>Question 1</span>
          <span>10</span>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "10%" }}></div>
        </div>

        <h1>Which letter is this?</h1>

        <div className="quiz-image">
          <img src={current.image} alt="Sign language question" />
        </div>

        <div className="quiz-options">
          {options.map((option) => (
            <button key={option.letter} className="option" disabled>
              {option.letter}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Quiz;