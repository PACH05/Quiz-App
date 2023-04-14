import React, { useEffect, useRef, useState } from "react";

//Function to format the Timer display in MM : SS
const formatter = (time) => {
  let min = Math.floor(time / 60);
  let sec = Math.floor(time - min * 60);

  if (min <= 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;
  return min + ":" + sec;
};

//This is the countdown component
const CountDown = ({ time, show }) => {
  const [counter, setCounter] = useState(time);
  const timer = useRef();

  //UseEffect updates the timer after every second
  useEffect(() => {
    timer.current = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer.current);
  }, []);

  //Checks if the timer has ended
  useEffect(() => {
    if (counter <= 0) {
      clearInterval(timer.current);
      show(0); //Lifting state to parent component
    }
  }, [counter]);

  return (
    <div className="flex justify-center align-middle">
      <h2>{formatter(counter)}</h2>
    </div>
  );
};

export default CountDown;
