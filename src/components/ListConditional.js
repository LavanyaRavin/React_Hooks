import React from 'react'

function ListConditional() {
    const family =["ravi","lavanya","shashank","kutnikar","om","samantha"]
  return (
    <>
    <div>Family List</div>
    
    {
        family.length === 0?<p>no family members</p>:
family.map((value,index)=>{
    
    return(
        <p key={index}>{index+1}.{value}</p>
    )
})
    }
    </>
  )
}

export default ListConditional