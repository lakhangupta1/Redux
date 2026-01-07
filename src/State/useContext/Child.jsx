import React, { useContext} from 'react'
import { ThemeContext } from './ThemeContext'

function Child() {
    const { theme, setTheme, money, lakhan } = useContext(ThemeContext);
    console.log(" money -> ", money );
    console.log(" lakhan -> ", lakhan);
    console.log(" theme is in child compoent -> " , theme );
    return (
        <div style={{ padding : "20px", background : theme === "light" ? "#eee" : "#333", color : theme === "light" ? "#000" : "#fff"}}> 
            Child
            <h2>Current Theme : { theme }</h2>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light" )}> Toggle Theme</button>
        </div>
    )
}

export default Child