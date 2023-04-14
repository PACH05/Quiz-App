import React, { useEffect, useState } from "react";
import { data } from "../components/firebase/FireBase";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const Create = () => {


  const [show, setShow] = useState(true);
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [tl, setTl] = useState("");
  const [mpq, setMpq] = useState(0);
  const [noq, setNoq] = useState(0);
  const [disable, setDisabled] = useState(false);

  const [Ques, setQues] = useState("");
  const [OptionA, setA] = useState("");
  const [OptionB, setB] = useState("");
  const [OptionC, setC] = useState("");
  const [OptionD, setD] = useState("");
  const [correct, setCorrect] = useState("");

  const arr = [];
  const handleAddQuestion = () => {
    if (
      name === null ||
      des === null ||
      tl === null ||
      mpq === 0 ||
      noq === 0
    ) {
      alert("All fields are mandatory!!");
    } else {
      { alert(
        "Enter all the questions statement and options, then use the ADD NEXT QUESTION button to add as many questions you want. After the final question, click the PUBLISH button"
      )}
      setShow(false);
      setDisabled(true);
      arr.push({ description: des });
      arr.push({ time: tl });
      arr.push({ marksPerQuestion: mpq });
      data.ref().child(name).push(arr);
    }
    console.log(name);
    console.log(arr);
  };

  const handleNextQuestion = () => {
    if (
      Ques === null ||
      OptionA === null ||
      OptionB === null ||
      OptionC === null ||
      OptionD === null ||
      correct === null
    ) {
      alert("All fields are mandatory!!");
    } else {
      // console.log({
      //   Question: Ques,
      //   a: OptionA,
      //   b: OptionB,
      //   c: OptionC,
      //   d: OptionD,
      //   cor : correct
      // });
      arr.push({
        Question: Ques,
        a: OptionA,
        b: OptionB,
        c: OptionC,
        d: OptionD,
        cor: correct,
      });
      data.ref().child(name).push(arr);
      setQues("");
      setA("");
      setB("");
      setC("");
      setD("");
      setCorrect("");
    }
  };
  const navigate = useNavigate();

  const handlePublish = () => {
    handleNextQuestion();
    alert(
      "Quiz created successfully, share the QUIZ NAME with the participants"
    );
    navigate("/");
  };

  return (
    <div>
      <NavBar></NavBar>
      <br />
      <h2 className="flex justify-center font-semibold text-lg">
        Enter Quiz Details
      </h2>
      <br />

      {show && (
        <div className="flex justify-center align-middle">
          <div className="flex-col align-middle justify-center">
            <input
              type="text"
              placeholder="Enter Quiz Name(Share this with the participants)"
              className="flex justify-center align-middle w-96 rounded-lg h-10 mx-1 my-3 px-1 border-spacing-2 text-left border-2 border-indigo-400"
              onChange={(e) => {
                setName(e.target.value);
              }}
              disabled={disable}
            />
            <input
              type="text"
              placeholder="Enter Quiz Description"
              className="flex align-middle justify-center w-96 rounded-lg h-10 mx-1 px-1 my-3 border-spacing-2 text-left border-2 border-indigo-400"
              onChange={(e) => {
                setDes(e.target.value);
              }}
              disabled={disable}
            />
            <input
              type="text"
              placeholder="Enter Quiz Time Limit (In Minutes)"
              className="flex align-middle justify-center w-96 rounded-lg h-10 mx-1 my-3 px-1 border-spacing-2 text-left border-2 border-indigo-400"
              onChange={(e) => {
                setTl(e.target.value);
              }}
              disabled={disable}
            />
            <input
              type="text"
              placeholder="Enter the number of questions in the quiz"
              className="flex align-middle justify-center w-96 rounded-lg h-10 mx-1 my-3 px-1 border-spacing-2 text-left border-2 border-indigo-400"
              onChange={(e) => {
                setNoq(e.target.value);
              }}
              disabled={disable}
            />
            <input
              type="text"
              placeholder="Enter Marks per Question"
              className="flex align-middle justify-center w-96 rounded-lg h-10 mx-1 my-3 px-1 border-spacing-2 text-left border-2 border-indigo-400"
              onChange={(e) => {
                setMpq(e.target.value);
              }}
              disabled={disable}
            />
            <br />
            <div className="flex justify-center align-middle">
              <button
                className="flex justify-center align-middle py-1.5 bg-[#4A94EA] text-[#FFFFFF] rounded-xl w-32 h-10"
                onClick={handleAddQuestion}
              >
                Add Questions
              </button>
              <br />
            </div>
          </div>
        </div>
      )}
      {!show && (
        <div className="flex justify-center align-middle">
          <div className="flex-col align-middle justify-center">
            <h1>Enter Quiz Prompt</h1>
            <input
              type="text"
              className="flex justify-center align-middle w-96 rounded-lg h-10 mx-1 my-3 px-1 border-spacing-2 text-left border-2 border-indigo-400"
              value={Ques}
              onChange={(e) => {
                setQues(e.target.value);
              }}
            />
            <h1>Enter Option A</h1>
            <input
              type="text"
              className="flex align-middle justify-center w-96 rounded-lg h-10 mx-1 px-1 my-3 border-spacing-2 text-left border-2 border-indigo-400"
              value={OptionA}
              onChange={(e) => {
                setA(e.target.value);
              }}
            />
            <h1>Enter Option B</h1>
            <input
              type="text"
              className="flex align-middle justify-center w-96 rounded-lg h-10 mx-1 my-3 px-1 border-spacing-2 text-left border-2 border-indigo-400"
              value={OptionB}
              onChange={(e) => {
                setB(e.target.value);
              }}
            />
            <h1>Enter Option C</h1>
            <input
              type="text"
              className="flex align-middle justify-center w-96 rounded-lg h-10 mx-1 my-3 px-1 border-spacing-2 text-left border-2 border-indigo-400"
              value={OptionC}
              onChange={(e) => {
                setC(e.target.value);
              }}
            />
            <h1>Enter Option D</h1>
            <input
              type="text"
              className="flex align-middle justify-center w-96 rounded-lg h-10 mx-1 my-3 px-1 border-spacing-2 text-left border-2 border-indigo-400"
              value={OptionD}
              onChange={(e) => {
                setD(e.target.value);
              }}
            />
            <h1>
              Enter Correct Option (Case Sensitive, should be same as option
              text)
            </h1>
            <input
              type="text"
              className="flex align-middle justify-center w-96 rounded-lg h-10 mx-1 my-3 px-1 border-spacing-2 text-left border-2 border-indigo-400"
              value={correct}
              onChange={(e) => {
                setCorrect(e.target.value);
              }}
            />
            <br />
            <div className="flex justify-center align-middle">
              <button
                className="flex justify-center align-middle mx-2 py-1.5 bg-[#636363] text-[#000000] rounded-xl w-40 h-10"
                onClick={handleNextQuestion}
              >
                Add Next Question
              </button>
              <br />
              <br />
              <br />
              <button
                className="flex justify-center align-middle py-1.5 bg-[#4A94EA] text-[#FFFFFF] rounded-xl mx-2 w-32 h-10"
                onClick={handlePublish}
              >
                Publish Quiz
              </button>
              <br />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Create;
