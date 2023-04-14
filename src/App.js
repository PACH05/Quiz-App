import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Quiz from "./pages/Quiz";
import Scores from "./pages/Scores";
import Error from "./pages/Error";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/createquiz" element={<Create />} />
          <Route exact path="/quiz" element={<Quiz />} />
          <Route exact path="/scores" element={<Scores />} />
          <Route exact path="/error" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
