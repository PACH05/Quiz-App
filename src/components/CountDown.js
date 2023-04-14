import React, { useEffect, useRef, useState } from 'react'

const formatter = (time)=>{
    let min = Math.floor(time/60);
    let sec = Math.floor(time - min * 60)

    if(min <= 10) min = '0' + min;
    if(sec < 10) sec = '0' + sec;
    return min + ":" + sec;
}

//This is complete
const CountDown = ({time, show}) => {

    const[counter, setCounter] = useState(time);
    const timer = useRef();

    useEffect(()=>{
        timer.current = setInterval(()=>{
            setCounter(prev=> prev - 1)
        },1000)
        return ()=> clearInterval(timer.current)
    },[])

    useEffect(()=>{
        if(counter <= 0){
            clearInterval(timer.current);
            show(0);
        }
    }, [counter])
     
    return (
    <div className='flex justify-center align-middle'>
        <h2>{formatter(counter)}</h2>
    </div>
  )
}

export default CountDown