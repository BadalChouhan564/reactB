
import { useState,useEffect, useRef } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  // let val = useRef(0);

  // let btnRef = useRef();

  // function handleIncreament(){
  //   val.current = val.current+1;
  //   console.log("value of val "+ val.current);
  //   setCount(count+1);
  // }

  // //its run on every render
  // useEffect(() => {
  //   console.log("me firse render ho gya hu.");
    
  // })

  // function changeColor(){
  //   btnRef.current.style.backgroundColor = "red";
  // }

  const [time, setTime] = useState(0);

  let timerRef = useRef(null);

  function startTimer(){
    timerRef.current = setInterval(() => {
      setTime(time => time+1);
    }, 1000);
  }

  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer(){
    stopTimer();
    setTime(0);
  }
   

  return (
  <div>
    <h1>StopWatch: {time} seconds</h1>
    <button onClick={startTimer}>
      Start
    </button>
    <br /><br />

    <button onClick={stopTimer}>
      Stop
    </button>
    <br /><br />

    <button onClick={resetTimer}>
      Reset
    </button>
    <br /><br />

    {/* <button
    ref={btnRef}
    onClick={handleIncreament}>Increament</button>
    <br />

    <button onClick={changeColor}>
      change color of 1st button
    </button>
    <div>
      Count:{count}
    </div> */}
   </div>
  )
}

export default App
