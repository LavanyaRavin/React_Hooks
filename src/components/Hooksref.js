import React, { useState, useRef, useEffect } from 'react'

function Hooksref() {
  const [name,setName]=useState("")
  const [counter, setCounter]=useState(0)
const previousCounterRef=useRef("")

  console.log("counter",counter)
  const inputref=useRef("")
  console.log(inputref)


const resetInput = ()=>{

  setName("")
  inputref.current.focus()
}

useEffect(()=>{
  previousCounterRef.current=counter;
},[counter])
  return (
    <>
    <div className='App'>
    <div>
<input 
ref={inputref}
name="name"
autoComplete='off'
type="text"
value={name}
onChange={(e)=>setName(e.target.value)}
/>
<button onClick={resetInput}>Reset</button>
</div>
<div>my name is {name}</div>
<div>
<h1>Random Counter:{counter}</h1>
{typeof previousCounterRef.current !=="undefined" &&(<h2>previos counter:{previousCounterRef.current}</h2>)}
<button onClick={(e)=>setCounter(Math.ceil(Math.random()*100))}>Generate Number</button>
</div>
    </div>
    
    </>
  )
  
}


export default Hooksref