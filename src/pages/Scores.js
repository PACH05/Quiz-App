import React from 'react'
import NavBar from '../components/NavBar'
import { useLocation } from 'react-router-dom'
const Scores = () => {

  const location = useLocation();
  const score = location.state.score;
  return (
    <div>
        <NavBar />
        <h1>Score is {score}</h1>
    </div>
  )
}

export default Scores