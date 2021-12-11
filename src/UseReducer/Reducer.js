import React, {useReducer} from 'react'

export default function Reducer() {
    const redc = (state, action) => {
       switch(action.type){
        case "INCREMENT" :
            return {count : state.count + 1, showText : false} 
        case "DECREMENT" :
            let dec = (state.count > 0) ? state.count - 1 : 0
            return {count : dec , showText : state.showText} 
        case "SHOWTEXT" :
            return {count : state.count , showText : true}       
        case "HIDETEXT" :
            return {count : state.count , showText : false}
        default : {}
       }
    }
    const [state, dispatch] = useReducer(redc, {count : 0, showText : false})
    return (
        <>
        <h1>useReducers</h1>
        <p>Value of Quantity {state.count}</p>
          { state.showText && <p> Show Me </p>}
        <div>
            <button onClick={() =>{  dispatch({type: "INCREMENT"}); dispatch({type: "SHOWTEXT"});}   }>Increment</button>
            <button onClick={() =>{dispatch({type: "DECREMENT"});}}>Decrement</button> 
            <button onClick={() =>{dispatch({type: "HIDETEXT"});}}>HideText</button> 
        </div>
        <hr/>
        </>
    )
}
