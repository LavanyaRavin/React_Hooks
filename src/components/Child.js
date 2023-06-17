import React, { useContext } from 'react'
import {Countercontext} from './HooksContext'

function Child() {
const {counter, setCounter}=useContext(Countercontext)

const increment=()=>{
    setCounter((prev)=>prev+1);
  }

  const decrement=()=>{
    setCounter((prev)=>prev-1);
  }

const style ={
    border:"1px solid grey",
    boxBorder:"1px 1px 5px 0px grey",
    backgroundColor:"pink"
}

  return (
    <>
    <div style={style}>
        <h2>Child Component</h2>
    <span>{counter}</span>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <GrandChild />
    </div>
    </>
  )
}


function GrandChild(){
    const {counter, setCounter}=useContext(Countercontext)

    const increment=()=>{
        setCounter((prev)=>prev+1);
      }
    
      const decrement=()=>{
        setCounter((prev)=>prev-1);
      }

    const grand ={
        border:"1px solid grey",
        boxBorder:"1px 1px 5px 0px grey",
        backgroundColor:"violet",
        margin:"5px",
        padding:"10px"
    }
    
    return(
        <>
        <div style={grand}>
            <h2>Grand Child Componenet</h2>
        <h3>{counter}</h3>
        <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
        </div>
        </>
    )
}


export default Child