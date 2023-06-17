import React from 'react'
import "../components/Forms.css"
import { useState } from 'react';

function Forms() {
    const [arra, setArra] =useState([])
    const [namef, setNamef]=useState("");
    const [namel, setNamel]=useState("");
    const handleForm=(e)=>{
        e.preventDefault();
        alert(`name you have entered is ${namef} ${namel}`)
    
    }

    const addArra=()=>{
        setArra((prev)=>[...prev, "lavanya"])
        console.log(arra)
    }
  return (
    <>
    <div>Forms</div>
    <form className='form'onSubmit={handleForm} >
        <label for="name">First Name</label><br></br>
        <input 
        type='text'
        id="name"
        onChange={(e)=>{setNamef(e.target.value)}}
        ></input><br></br>
        <label for="last">Last Name</label><br></br>
        <input
        type='text'
        id="last"
        onChange={(e)=>{setNamel(e.target.value)}}
        ></input>
        <button >Submit</button>
    </form>
    <span>{namef}</span><br></br>
    <span>{namel}</span><br></br>
    {arra.map((value,index)=>{return<p key={index}>{index+1}.{value}</p>})}
    <button onClick={addArra}>add element to array</button>
    </>
  )
}

export default Forms