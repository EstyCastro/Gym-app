import React from 'react'
import {Link,useNavigate} from 'react-router-dom';

export default function Questionnaire(props) {
 const navigate = useNavigate();
 const saveDetails = ()=>{
    //Opening the trainee's channel
    navigate(`/showWorkout/${props.fullName}`);
 }

 const rolleback = ()=>{
     //Return to the main page and reset the data
     props.deletTraining()
     console.log('props.training',props.training)
     props.changePage('home')  
 }
  return (
    <div>
      <h1>Ready?</h1>
      <button onClick={saveDetails}>Yes</button>
      <button onClick={rolleback}>No</button>
    </div>
  )
}
