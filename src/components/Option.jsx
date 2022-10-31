import React from 'react'

export default function Option() {
  
    const weeks = [];
    for(let i=1; i<31; i++){
        weeks.push(i);
    }

  return (
   <React.Fragment>
        {weeks.map((num)=>{
        return <option>{num}</option>
        })}
   </React.Fragment>
  )
};
