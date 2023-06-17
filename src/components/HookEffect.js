import React from 'react'
import { useEffect, useState } from 'react'

function HookEffect() {

    const[obj,setObj] = useState({
        num:1,
        id:"abcd",
    });
//console.log(obj)


    const objIncre = ()=>{
        setObj((prev)=>{
            return{
               ...prev,
               num:prev.num+1,
               
            }
        })
    }

    const objDecre = ()=>{
        setObj((prev)=>{
            return{
               ...prev,
               num:prev.num-1,
            }
        })
    }

    // useEffect(()=>{
    //    // console.log("component reloaded")
    //    setObj({
    //             num:5,
    //             id:"random"
    //    })
    // },[obj.num])

    const [screenWidth, setScreenwidth] = useState(0)
    useEffect(()=>{
        window.addEventListener("resize",()=>{
            setScreenwidth(window.innerWidth)
        })
        console.log("hello")
        return()=> { window.removeEventListener("resize",()=>{})
        console.log("unmounting")
    }
        
        
    },[])

  return (
    <>
    <div>Hookstate</div>
    <button onClick={objIncre}>+</button>

    <span>{obj.num}</span><span>{obj.id}</span>
    <button onClick={objDecre}>-</button>
    <p>{screenWidth}</p>
    </>
  )
}


                                                                 
export default HookEffect