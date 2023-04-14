import React from "react";
import NavBar from "../components/NavBar";
import { useLocation } from "react-router-dom";

//Page to display scores
const Scores = () => {
  const location = useLocation(); //Hook
  const score = location.state.score; //Get the score from the previous route
  return (
    <div>
      <NavBar />
      {/* Display score */}
      <h1>Score is {score}</h1> 

    </div>
  );
};

export default Scores;
