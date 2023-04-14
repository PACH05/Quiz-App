import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "./bre.png";
import { data } from "../components/firebase/FireBase";

//Component to display the Enter quiz 
const TakeBox = () => {
  const [quiz, setQuiz] = useState("");
  const navigate = useNavigate();
 
  // Button click handler
  const handleClick = async() => {
    if(quiz === null || quiz === ""){ // If the input is empty
      alert("Quiz name can't be empty")
      return;
    }
    //Check if the quiz exists in the database
    const check = await data.ref(quiz)
    .orderByKey().limitToFirst(1).once('value')
    .then(res => res.exists());
    
  if(check){ //Fetch quiz details if it exists
      data
      .ref()
      .child(quiz)
      .on("value", (fetchdata) => {
        const getData = Object.values(fetchdata.val());
          navigate("/quiz", { state: { getData } }); //Navigate to Quiz page
      }); 
    }
    else{
      navigate("/error"); //Navigate to Error Page
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
