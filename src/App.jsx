import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import BrailleTranslator from "./components/BrailleTranslator";
import SignLanguage from "./components/SignLanguage";
import Quiz from "./components/Quiz";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Admin from "./components/Admin";
import Settings from "./components/Settings";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/braille" element={<BrailleTranslator />} />
        <Route path="/sign-language" element={<SignLanguage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
