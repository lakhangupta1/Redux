import React, { useEffect, useState } from 'react'

//  no need jsx 
// function CustomHook() {
//   return (
//     <div>CustomHook</div>
//   )
// }

// export default CustomHook;

// no  jsx present in useFetch
// A Custom Hook is a reusable function that:
// Starts with use

// function useSomething() {
// hook logic
// }

// useFetch 

export function useFetch(url){

    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const fetchData = async() => {
            try{
                setLoading(true);
                const res = await fetch(url);
                if(!res.ok) throw new Error("Failed to Fetch");
                const result = await res.join();

                if(isMounted){
                    setData(result);
                    setLoading(false);
                }                
            }catch(error){
                if(isMounted){
                    setError(error.message);
                    setLoading(false);
                }
            }
        } 
        fetchData();
        return () =>{
            isMounted = false; // clean up 
        };

    }, [ url ]);
    return { data, loading, error };
}

// use it another component

import { useFetch } from './useFetch';

export default function Users(){
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");
    if(loading){
        return <p> Loading .....</p>
    }
    if(error){
        return <p> Error : { error }</p>
    }
    return (
        <ul>
            {
                data.map(user => (
                    <li key={user.id} >{ user.name }</li>
                ))
            }
        </ul>
    )
}


