
import { useState } from 'react'
import './App.css'
import ChildComponent from '../../react-project-four/src/components/ChildComponent';

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <div>
        Count:{count}
      </div>
      <br /><br />
      <div>
        <button onClick={handleClick}>Increament</button>
      </div>
      <br /><br />
      <div>
        <ChildComponent
          buttonName="click me"
          handleClick={handleClick}
        />
      </div>
    </div>
  )
}

export default App
