import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "./bre.png";
import { data } from "../components/firebase/FireBase";

const TakeBox = () => {
  const [quiz, setQuiz] = useState("");
  const navigate = useNavigate();
 
  const handleClick = async() => {
    if(quiz === null || quiz === ""){
      alert("Quiz name can't be empty")
      return;
    }
    const check = await data.ref(quiz)
    .orderByKey().limitToFirst(1).once('value')
    .then(res => res.exists());
    
  if(check){
      data
      .ref()
      .child(quiz)
      .on("value", (fetchdata) => {
        const getData = Object.values(fetchdata.val());
          navigate("/quiz", { state: { getData } });
      }); 
    }
    else{
      navigate("/error");
    } 
  }

  return (
    <div className="my-2 bg-[#F0F0F0] rounded-xl w-72">
      <div className="m-2 p-2">
        <img src={Image} alt="Quiz" />
        <div className="flex flex-col justify-center align-middle">
          <input
            type="text"
            placeholder="Enter Quiz Name"
            className="p-2 h-10"
            value={quiz}
            onChange={(e) => setQuiz(e.target.value)}
          />
          <br />
          <button
            className="flex justify-center align-middle mx-16 py-2 bg-[#4A94EA] text-[#FFFFFF] rounded-xl w-32 h-10"
            onClick={() => handleClick()}
          >
            Take Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default TakeBox;
