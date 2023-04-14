import React from "react";
import { useNavigate } from "react-router-dom";

const ShowQuiz = (props) => {
  let index = 1;
  let ans = "";
  let score = 0;
  const navigate = useNavigate();

  function onChangeValue(e) {
    ans = e.target.value;
    console.log(ans);
    console.log(props.quiz[index][0].cor);
  }
  function handleNextQuestion() {
    if (index === props.quiz.length - 1) {
      if (ans === props.quiz[index][0].cor) {
        score += props.quiz[0][2].marksPerQuestion;
        navigate("/scores", { state: { score: score } });
      } else {
        navigate("/scores", { state: { score: score } });
      }
    } else if (ans === props.quiz[index][0].cor) {
      score += props.quiz[0][2].marksPerQuestion;
      index += 1;
    } else {
      index += 1;
    }
    console.log("Score = ", score);
  }
  return (
    <div>
      <h1 className="flex mx-3">{props.quiz[index][0].Question} :</h1>
      <br />
      <div onChange={onChangeValue}>
        <input type="radio" value={props.quiz[index][0].a} name="option" />{" "}
        {props.quiz[index][0].a}
        <br />
        <input type="radio" value={props.quiz[index][0].b} name="option" />{" "}
        {props.quiz[index][0].b}
        <br />
        <input type="radio" value={props.quiz[index][0].c} name="option" />{" "}
        {props.quiz[index][0].c}
        <br />
        <input type="radio" value={props.quiz[index][0].d} name="option" />{" "}
        {props.quiz[index][0].d}
        <br />
      </div>
      <br />
      <div className="flex justify-center align-middle">
        <button
          className="flex justify-center align-middle py-1.5 bg-[#636363] text-[#000000] rounded-xl w-40 h-10"
          onClick={handleNextQuestion}
        >
          Next Question
        </button>
        <br />
      </div>
    </div>
  );
};

export default ShowQuiz;
