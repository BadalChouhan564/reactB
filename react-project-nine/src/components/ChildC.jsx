import React, { useContext } from 'react'
//import { UserContext } from '../App'
import { themeContext } from '../App'

const ChildC = () => {
   // const user = useContext(UserContext);
      const {theme, setTheme} = useContext(themeContext);
      function handleClick(){
        if(theme === 'light')
            setTheme('dark')
        else 
             setTheme('light')
      }
  return (
    <div>
     <button onClick={handleClick}>
        change theme
     </button>
    </div>
  )
}

export default ChildC
