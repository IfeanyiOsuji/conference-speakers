

import  { useState } from 'react'

const useTheme = (startingTheme = 'light') => {
    const [theme, setTheme] = useState(startingTheme);

const validate = (themeValue)=>{
        if(themeValue == 'dark'){
            setTheme('dark')
        }
        else{setTheme('light')};
}
return {theme, setTheme:validate};  

  }
export default useTheme