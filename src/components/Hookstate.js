// import React, { useState } from 'react'

// function Hookstate() {

//     const[count,setCount] = useState(0);
//     const[obj,setObj] = useState({
//         num:1,
//         id:"abcd",
//     });
// console.log(obj)

//     const handleAdd = ()=>{
//         setCount((prev)=>prev+1)
//         setCount((prev)=>prev+1)
        
//     }

//     const handleSub = ()=>{
//         setCount(count-1);
//     }

//     const objIncre = ()=>{
//         setObj((prev)=>{
//             return{
//                ...prev,
//                num:prev.num+1,
               
//             }
//         })
//     }

//     const objDecre = ()=>{
//         setObj((prev)=>{
//             return{
//                ...prev,
//                num:prev.num-1,
//             }
//         })
//     }


//   return (
//     <>
//     <div>Hookstate</div>
//     <button onClick={handleAdd}>+</button>
//     <span>{obj.num}</span>
//     <button onClick={handleSub}>-</button>
//     </>
//   )
// }

// export default Hookstate

import React, { useState } from 'react'

function Hookstate() {
   const [count, setCount] =useState(1);
   const [name, setName] =useState("Lavanya");
   const [arr] =useState([23,34,45]);

  const[obj,setObj] = useState({
        num:1,
        id:"abcd",
    });

    const changeName = ()=>{
        setName("ravi")
    }

    const accessObj=()=>{
        console.log(obj.num)
        setObj((prev)=>{
            return{
                ...prev,
             num:prev.num+1,
            }
        })
        }

   const handleincre=()=>{
    //setCount(count+1)
    console.log(count)
    setCount((prev)=>prev+1);
    setCount((prev)=>prev+1)
   }
   const handleDecre=()=>{
   setCount(count-1)
   console.log(count)
    // setCount((prev)=>prev-1)
   }
  return (
    <>
    <div>Hookstate</div>
    <button onClick={handleincre}>+</button>
    <span>{count}</span>
    <button onClick={handleDecre}>-</button><br></br>
    <span>{obj.num}</span>
    <button onClick={accessObj}>+</button><br></br>
    <span>{name}</span>
    <button onClick={changeName}>changeNmae</button>
    
     {arr.length===0?<p>no students</p>: <div style = {{backgroundColor:"grey"}}>
   {arr.map((value,index)=>{return <p key={index}>{index+1}.{value}</p>})}
    </div>}
    </>
  )
}

export default Hookstate