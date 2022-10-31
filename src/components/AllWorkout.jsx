import React, { useState,useEffect } from 'react';

export default function AllWorkout(props) {
    const [background,setBackground] = useState()
    const [enabled,setEnabled ] = useState()
    
    useEffect(()=>{
      if(props.element.don=='no'){
        setEnabled(false)
        setBackground('#dbeff5')
      }else{
        setEnabled(true)
        setBackground('white')
      }
     }, [])

    const startTraining =() => {
       props.saveTrainingNumber(props.element.no,props.element.km)
       props.changePage('workout')
    }

  return (
    <div>
     { <button disabled={enabled} style={{background:background}} className='styleWorkout' value={props.element.no} 
      onClick={startTraining}>
      Workout N.O :{props.element.no}<br></br> 
      {props.element.km} Km <br></br></button> }
    </div>
  )
}
