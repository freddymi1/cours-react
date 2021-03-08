import React, {useState, useEffect} from 'react';
export default function Test(props){
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title=`Vous avez cliquee ${count} fois`
    })
    return(
        <>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Click +</button>
        <button onClick={() => setCount(count - 1)}>Click -</button>
        </>
    )
}