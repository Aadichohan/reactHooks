import React,{useEffect, useState} from 'react'

export default function Effect() {
    const [Count, setCount] = useState(0)
    useEffect(()=>{
        document.title = `Chat ${Count}`
       console.log('effect');
    })
    return (
        <div>
            <h1>useEffect</h1>
            <h2>{`Count : ${Count}`}</h2>
            <button onClick={()=> setCount(Count + 1)}>Click Me</button>
            <br/>
            <hr/>
        </div>
    )
}
