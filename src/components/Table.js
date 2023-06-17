import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./Table.css"

function Table() {

    // useEffect(()=>{
    //     async function get() {

    //         try{
    //            let res = await fetch("https://jsonplaceholder.typicode.com/posts")
    //           let data = await res.json();
    //           console.log(data)
    //         }
    //         catch(error){
    //        console.log(error.message)
    //         }
    //         finally{
    //            console.log("api got fetched")
    //         }
           
           
    //            }
           
    //            get()
    // },[])

    const[data, setData]=useState([]);

    useEffect(()=>{

      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
    
            setData(response.data)
            console.log(response.data)
        })
        .catch((err) =>console.log(err));

        
    },[])

  return (
    <>
    <div>
<table>
    <thead>
        <tr>
            <th>id</th>
            <th>userId</th>
            <th>title</th>
        </tr>

    </thead>

<tbody>
    {data.map((value,index)=>{
     let userid = value.userId;
     let title = value.title;
     let ids= value.id;

     return(
        <tr key={index}>
            <td>{ids}</td>
            <td>{userid}</td>
            <td>{title}</td>
        </tr>
     )
    })
}
</tbody>
</table>

    </div>
    </>
  )

  }
export default Table