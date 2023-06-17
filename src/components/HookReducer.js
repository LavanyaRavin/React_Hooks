import React from 'react'
import { useReducer } from 'react'

function HookReducer() {
function counterReducer(state,action){
    switch (action.type) {
        case "INCREMENT":
        return {count:state.count+1}

        case "DECREMENT":
        return {count:state.count-1}

        case "RESET":
        return {count:0}
    
        default:
            throw Error("invalid action")
    }
}

    const[state,dispatch]=useReducer(counterReducer,{count:0});


  return (
    <>
    <div>HookReducer</div>
    <h1>{state.count}</h1>
    <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
    <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
    <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
    </>
  )
}

export default HookReducer