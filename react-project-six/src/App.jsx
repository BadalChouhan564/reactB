
import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';

function App() {
  const [isLoggedin, setLoggedIn] = useState(true);

  if (!isLoggedin) {
   return(
    <LoginBtn/>
   )
  }
  return(
    <div>
      <h1>welcome to codehelp webDev Course</h1>
      <div>
        {isLoggedin && <LogoutBtn/>}
      </div>
    </div>
  )


  // return(
  //   <div>
  //     {isLoggedin ? <LogoutBtn/> : <LoginBtn/>}
  //   </div>
  // )
  



  // if (isLoggedin) {
  // return(
  //   <LogoutBtn />
  // )
  // } else {
  // return(
  //   <LoginBtn />
  // )
  // }
}

export default App
