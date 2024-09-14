import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

//  step:1 create context
//const UserContext = createContext();

// step:2  wrap all the child inside a provider
// step:3  pass value
// step:4 consumer ke andar jake consume karlo.

const themeContext = createContext();

function App() {
 // const [user, setUser] = useState({name:"badal"});
    const [theme, setTheme] = useState('light');

  return (
    <themeContext.Provider value={{theme, setTheme}}>
      <div id='container' style={{backgroundColor:theme === 'light'?"beige":"black"}}>
      <ChildA/>
      </div>
    </themeContext.Provider>


  // <>
  // <UserContext.Provider value={user}>
  // <ChildA/>
  // </UserContext.Provider>
  // </>
  
  )
}

export default App
//export {UserContext}
export {themeContext}
