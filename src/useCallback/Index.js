import React, {useCallback, useState, useEffect} from 'react'

export default function Index() {
    const [Number, setNumber] = useState({
        num1 : 0,
        num2 : 2
    })    
    const [Result, setResult] = useState(0);

    useEffect(()=>{
        console.log(Number)
    },[Number, Result]);

    const memoizedCallback = useCallback(() => {
            setResult(Number.num1 + Number.num2)
            console.log('Callback result ',Result)
        },[Number, Result])
    return (
        <div>
            <h1>useCallback</h1>
            <h2>{`Result : ${Result}`}</h2>
            <input type="text" onChange={(e)=> setNumber({num1 : +e.target.value, num2: Number.num2})}/>
            <input type="text" onChange={(e)=> setNumber({num2 : +e.target.value, num1: Number.num1})}/>
              <button onClick={memoizedCallback}>CalCulate</button>
              <hr />
        </div>
    )
}
