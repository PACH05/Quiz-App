import React, { useState } from "react";
import NavBar from "../components/NavBar";
import CountDown from "../components/CountDown";
import { useLocation, useNavigate } from "react-router-dom";
import ShowQuiz from "../components/ShowQuiz";

//Quiz page which page
const Quiz = () => {
  const [show, setShow] = useState(true); //To be used for state lifting
  const nav = useNavigate();
  const shouldShow = (data) => {
    if (data === 0) {
      setShow(false);
      nav("/scores");
    }
  };

  //Get data from previous route
  const location = useLocation();
  const quizdata = location.state.getData; //Get data
  const time = location.state.getData[0][1].time * 60; //Convert time
  return (
    <div>
      <NavBar />
      <br />
      <CountDown time={time} show={shouldShow} />
      {show && (
        <div>
          <ShowQuiz quiz={quizdata} />
        </div>
      )}
    </div>
  );
};

export default Quiz;
