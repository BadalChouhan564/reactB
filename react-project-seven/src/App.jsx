
import './App.css'

function App() {
  function handleClick(){
    alert("I am Clicked");
  }

  function handleMouseOver(){
    alert("para ke uper mouse lekar aaye ho");
  }

  function handleInputChange(e){
    //console.log("input me value change hui he");
    console.log("Value till know", e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    // i am writing my costom behaviour down
    alert("form submit kar du kya")
  }


  return (
   <div>

    <button onClick={alert("inideiate invoke ni karna he")}>
      click me
    </button>

    {/* <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange} />
      <button type='submit'>Submit</button>
    </form> */}

    {/* <p onMouseOver={handleMouseOver} style={{border:"1px solid black"}}>
      i am a para
    </p>

    <button onClick={handleClick}>
      Click me
    </button> */}


   </div>
  )
}

export default App
