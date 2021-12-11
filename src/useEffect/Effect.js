import React,{useEffect, useState} from 'react'
import Effect2 from './Effect2';

export default function Effect() {
    const [Count, setCount] = useState(0)
    useEffect(()=>{
        document.title = `Chat ${Count}`
       console.log('effect');
    })
    return (
        <>
            <h1>useEffect</h1>
        <div style={{width: '100%' , border: 'solid', height:'200px'}}>
            <h2>Use Effect Without Dependency & Cleanup</h2>
            <h2>{`Count : ${Count}`}</h2>
            <button onClick={()=> setCount(Count + 1)}>Click Me</button>
         </div>
            <br/>
            <Effect2 />
            <hr/>
        </>
    )
}
