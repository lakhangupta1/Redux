import React, { useEffect, useState } from 'react'

function Counter(){
    const [ count, setCount ] = useState(0);
    useEffect(() =>{
        console.log(" Count changed : ", count );
    }, [count]);

    return (
        <button onClick={() => { setCount( count + 1 )}}>
            Count : { count }
        </button>
    )
}


function UseEffect() {
    // useEffect(() => {
    // // side effect code

    // return () => {
    //     // cleanup (optional)
    // };
    // }, [dependencies]);

    // useEffect(() => {
    // }, [])// empty dependency array

    // useEffect(() => {
    //     console.log("Runs on every render");
    // });



    return (
        <div>UseEffect</div>
    )
}

export default UseEffect;


// useEffect: The useEffect hook in React is used to handle side effects
// in functional components. It allows you to perform actions such
// as data fetching, DOM manipulation, and setting up subscriptions,
// which are typically handled in lifecycle methods

// 1 . useEffect(() => { ... }, [dependencies]); runs side effects after rendering. 
// 2. The effect runs based on changes in the specified dependencies.
//  