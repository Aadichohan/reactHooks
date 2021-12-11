import React, {useMemo,useEffect, useState} from 'react'

export default function Memo() {
    const [Count, setCount] = useState(0)
    const [Data, setData] = useState(100)
    const [Name, setName] = useState('')
    useEffect(()=>{
        console.log(Math.random())
    },[Data]);

    const memo = useMemo(()=>{
        return(
            <>
            <h1>useMemo</h1>
            <h2>Memo Count: {Count} & Name : {Name}</h2>
            </>
        )
    },[Name])
    return (
        <>
        {memo}
        <h1>useMemo vs Use Effect</h1>
       <h2>{Count}</h2>
       <h2>{Data}</h2>
       <button onClick={()=>setCount(Count + 1)}>Click Count</button>
       <button onClick={()=>setData(Data + 1)}>Click Data</button>
       <button onClick={()=>setName('Ahad')}>Click Name</button>
        <hr/>
        </>
    )
}
