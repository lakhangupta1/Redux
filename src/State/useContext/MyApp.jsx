import React, { useState } from 'react'
import { ThemeContext } from './ThemeContext'
import Child from './Child';

function MyApp() {
    const [ theme, setTheme ] = useState("light");
    const   money = 10000;
    const lakhan  = {
        byas : 1 ,
        shiva: " delhi",
        village : "narayanpur"
    }

    console.log(" theme is in MyApp -> ", theme);

  return (
    <div>
        MyApp
        <ThemeContext.Provider value={{ theme, setTheme, money, lakhan }}>
            <Child/>
        </ThemeContext.Provider>

    </div>
  )
}

export default MyApp