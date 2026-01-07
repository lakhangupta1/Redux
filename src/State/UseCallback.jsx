import React, { memo, useCallback, useState } from 'react'

const Child = memo(({ onClick }) => {
    console.log(" Child rendered ");
    return <button onClick={onClick}>
        Click Child
    </button>
})

// git status 
function UseCallback() {
    const [ count , setCount ] = useState(0);
    const handleClick = useCallback(() =>{
        console.log(" Child clicked ");
    }, []); // stable reference
    
    
  return (
    <>
        <h2> Count : { count }</h2>
        <button onClick={() => setCount(count + 1 )}></button>
    </>
  )
}

export default UseCallback

// "useCallback is used to memoize functions 
// so they don’t get recreated on every render, 
// improving performance when passed to child components."

// useCallback is a React Hook used to memoize a function
// → It prevents the function from being re-created on every render.
// In React, functions are recreated on every render.

// const memoizedFn = useCallback(() => {
//   // function logic
// }, [dependencies]);


/**
 ######### 🔹 Key Interview Points  ######
    useCallback memoizes functions
    Works best with React.memo
    Prevents unnecessary child re-renders
    Not required everywhere (avoid overuse)
 */

