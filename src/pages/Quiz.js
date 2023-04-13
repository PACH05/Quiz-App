import React, { createContext, useEffect, useRef, useState } from 'react'
import NavBar from '../components/NavBar'
import CountDown from '../components/CountDown';
import { useLocation, useNavigate } from 'react-router-dom';
import ShowQuiz from "../components/ShowQuiz";

const Quiz = () => {
  const[show, setShow] = useState(true);
  const nav = useNavigate()
  const shouldShow = (data)=>{
      if(data === 0){
        setShow(false);
        nav("/scores")
      }
  }

  const location = useLocation()
  const quizdata = location.state.getData;
  console.log(quizdata);
  console.log(quizdata.length);

  const time = location.state.getData[0][1].time * 60
  return (
    <div>
      <NavBar />
      <br />
      <CountDown time = {time} show = {shouldShow}/>
      {show && <div>
        <ShowQuiz quiz = {quizdata}/>
      </div>
      }      

    </div>
  )
}

export default Quiz