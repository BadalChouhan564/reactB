import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);


  // first -> side-Effect functin
  // second -> clean-up function
  // comma seperated dependancy list

  // variation:1
  // Runs on every render
  // useEffect(() => {
  //   alert("I will run on every render")
  // })

  // variation: 2
  // runs only first render
  // useEffect(() => {
  //   alert("I will run on only first render")
  // }, [])
  
  //variation: 3

  // useEffect(() => {
  // alert("i will run every time when count is updated");
  // }, [count])
  
  //variation: 4
  // multiple dependancies
  // useEffect(() => {
  // alert("i will run every time when count/total is updated");
  // }, [count, total])

  // variation: 5
  // is baar let add a cleanup Function.

  // useEffect(() => {
  //   alert("count is updated")
  //   return () => {
  //     alert("count is unmounted from UI")
  //   }
  // }, [count])
  


  
  function handleClick(){
  setCount(count+1);
}

function handleClickTotal(){
  setTotal(total+1);
}

  return (
   <div>
    <button onClick={handleClick}>
      update count
    </button>
    <br />
    Count is: {count};

    <br />
    <button onClick={handleClickTotal}>
      update total
    </button>
    <br />
    total is: {total};
   </div>
  )
}

export default App
