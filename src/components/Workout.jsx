import React from 'react'
import {Link,useNavigate} from 'react-router-dom';

export default function Workout(props) {
  const navigate = useNavigate();
   
  const saveSuccess = ()=>{  
    props.training.trainingArr.map((item)=>{if(item.no == props.trainingNumber){
      item.don='yes'
       } })
    props.saveCounter()
    props.changePage('trainer')                                                 
  }

  const saveFailure = ()=>{
    props.changePage('trainer')
  }

  return (
    <div>
      <h1>{`Workout N.O ${props.trainingNumber} ${props.trainingKm} KM ?`}</h1>
      <button onClick={saveSuccess}>success</button>
      <button onClick={saveFailure}>failure</button>
    </div>
  )
}
