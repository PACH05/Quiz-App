import React, { useState } from 'react'

const ShowQuiz = (props) => {

   const [ans, setAns] = useState(""); 
   const [index, setindex] = useState(1);
   const [score, setScore] = useState(1);
   function onChangeValue(e){
        setAns(e.target.value);
        console.log(e.target.value)
        console.log(ans);
    }
    function handleNextQuestion(){
        if(ans == props.quiz[2][0].cor){
            setScore( score + 1);
            console.log(score);
        }
    }
  return (
    <div>
        <h1>
            {props.quiz[2][0].Question} :
         </h1>
         <br />
         <div onChange={onChangeValue}>
        <input type="radio" value= {props.quiz[2][0].a}  name="option" /> {props.quiz[2][0].a} 
        <br />
        <input type="radio" value= {props.quiz[2][0].b}  name="option" /> {props.quiz[2][0].b} 
        <br />
        <input type="radio" value= {props.quiz[2][0].c}  name="option" /> {props.quiz[2][0].c} 
        <br />
        <input type="radio" value= {props.quiz[2][0].d}  name="option" /> {props.quiz[2][0].d} 
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
  )
}

export default ShowQuiz